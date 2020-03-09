Page({

  /**
   * 页面的初始数据
   */
  data: {
      user_detail:[],
      stuId:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that=this
      //获取个人信息
      this.setData({stuId:options.stuId})
      wx.request({
        url: 'http://139.9.141.135:8080/json_test/user_detail.json',
        data: '',
        method: 'GET',
        dataType: 'json',
        responseType: 'text',
        success: function(res) {
          console.log("成功获取个人详细信息")
          that.setData({user_detail:res.data.user_detail[0]})
        },
        fail: function(res) {
          console.log("获取个人详细信息异常")
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
