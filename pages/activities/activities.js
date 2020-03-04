Page({

  /**
   * 页面的初始数据
   */
  data: {
    activities:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    //获取所有活动
    wx.request({
      url: 'http://139.9.141.135:8080/json_test/activities.json',
      data: '',
      header: { 'Content-Type': 'application/json' },
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log("-----获取所有活动Activities-----")
        that.setData({
          activities: res.data.act
        })
        console.log(that.data. activitiesy)
      },
      fail: function (res) {
        console.log("-----获取最新活动失败-----")
      },
      complete: function (res) { },
    })
    //
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
  toact:function(event){
    var id = event.currentTarget.dataset.actid
    wx.navigateTo({
      url: "../activity_detail/activity_detail?id="+id+"",
      success: function(res) {},
      fail: function(res) {
        console.log('------failNav!!!---')
      },
      complete: function(res) {},
    })
  }
})