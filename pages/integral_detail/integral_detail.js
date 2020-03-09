Page({

  /**
   * 页面的初始数据
   */
  data: {
    explain_detail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var id = options.id
    // 打印解释id
    console.log(id)
    wx.request({
      url: 'http://139.9.141.135:8080/json_test/explain.json',
      date:'',
      header:{
        'Content-type':'application/json'
      },
      method:'GET',
      dataType:'json',
      responseType:'text',
      success:function(res){
          console.log("我是运动积分")
          console.log(res)
          that.setData({
          explain_detail: res.data.integral[id]
          })
      

      },
      fail:function(){

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
    
  }
})