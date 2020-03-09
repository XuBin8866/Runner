Page({

  /**
   * 页面的初始数据
   */
  data: {
    longi: null,//我的经度
    lati: null,//我的纬度
    markLongi:123.60694742838541,//签到经度
    markLati:48.37680935329861,//签到纬度
    circles: [{
      longitude: 123.60694742838541,//签到经度
      latitude: 48.37680935329861,//签到纬度
      title: '签到位置',
      color: '#CCFF00',
      fillColor: '#CCFF00',
      radius: 500
    }],
    status: 0  //签到状态0表示false，1表示ture
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        console.log("初始化经纬度成功")      
        that.setData({ lati: res.latitude, longi: res.longitude })
        console.log("经度"+that.data.longi)  
        console.log("纬度" + that.data.lati)  
      },
      fail(res) {
        console.log("显示地图失败")
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
      
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  //签到
  mark: function () {
    console.log(this)
    var a = this.juli(this.data.lati, this.data.longi, this.data.markLati, this.data.markLongi)
    console.log(a)
    if (Number(a) < 0.05) {
      console.log("开始认证身份")
      wx.startSoterAuthentication({
        requestAuthModes: ['fingerPrint'],
        challenge: '205410',
        authContent: '正在验证您的身份',
        success: function (res) {
          console.log("认证成功")
          
          wx.showToast({
            title: '签到成功',
            duration: 3000,
            mask: true,
            success: function (res) {
              console.log("签到成功")
            },
            fail: function (res) {
              console.log("签到异常")
            },
          })
        },
        fail: function (res) {
          console.log("认证失败")
        },
      })
      
    }
    else{
      wx.showToast({
        title: '不在签到范围内',
        duration: 4000,
        mask: true,
        success: function (res) {
          console.log("签到失败————距离太远")
        },
        fail: function (res) {
          console.log("签到失败异常异常")
        },
      })
    }

    
  },
  //查看地图
  lookAd: function () {
    var that = this
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        console.log("显示地图成功")
        const latitude = res.latitude
        const longitude = res.longitude
        that.setData({ lati: res.latitude, longi: res.longitude })
        console.log(that.data.lati)
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      },
      fail(res) {
        console.log("显示地图失败")
      }
    })
  }, 
      // 计算两地之间的距离
      juli:function(lat1,lng1,lat2,lng2){
            console.log(lat1, lng1, lat2, lng2)
            var radLat1 = lat1 * Math.PI / 180.0;
            var radLat2 = lat2 * Math.PI / 180.0;
            var a = radLat1 - radLat2;
            var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
            var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
            s = s * 6378.137;
            s = Math.round(s * 10000) / 10000;
            return s
      }

})