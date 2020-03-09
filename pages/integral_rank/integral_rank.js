Page({

  /**
   * 页面的初始数据
   */
  data: {
      stuId:null,
      integral_rank:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({stuId:options.stuId})
    var that=this
    wx.request({
      url: 'http://139.9.141.135:8080/json_test/integral_rank.json',
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log("成功获取积分排行")
        that.setData({ integral_rank: res.data.integral_rank})
        console.log(that.data.integral_rank)
      },
      fail: function(res) {
        console.log("获取积分排行异常")
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
    
  }
})