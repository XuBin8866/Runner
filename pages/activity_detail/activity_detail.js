// pages/activity_detail/activity_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    act_detail:{},
    sign_number:0,
    total_number:0,
    sign:false,
    register:false,
    finish:false

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var act_id = options.id
    console.log("获取活动ID：")
    console.log(act_id)
    wx.request({
      url: 'http://139.9.141.135:8080/json_test/activities.json',
      data: '',
      header: {
        'Content-Type': 'application/json'
      },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log("-----正在获取活动-----")
        that.setData({ 
          act_detail: res.data.act[act_id]
        })
        that.setData({
          sign_number: that.data.act_detail.showJoinNumber,
          total_number: that.data.act_detail.totalNumber
        })
      },
      fail: function (res) { },
      complete: function (res) {
        console.log(that.data.act_detail)
      },

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
  signClick:function(){
      var that=this
      var number = parseInt(this.data.sign_number)
      var total=parseInt(this.data.total_number)
      if(number>=total){
        wx.showToast({
          title: '报名人数已达上限！',
          icon: '',
          image: '',
          duration: 0,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
      }else{
        wx.showToast({
          title: '报名成功',
          icon: 'success',
          image: '',
          duration: 1500,
          mask: true,
          success: function(res) {},
          fail: function(res) {},
          complete: function(res) {},
        })
        this.setData({
          sign: true,
          sign_number: number+1
        })
      }
      
  },
  hasSignClick:function(){

  }
})