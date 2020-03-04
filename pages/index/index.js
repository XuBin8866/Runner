//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper:[],
    lastActivity:null,
    paper:[],
    background: ['http://139.9.141.135:8080/images_test/img1.png', 'http://139.9.141.135:8080/images_test/img2.png', 'http://139.9.141.135:8080/images_test/img3.png'],
    contentItems: ['http://139.9.141.135:8080/images_test/img1.png', 'http://139.9.141.135:8080/images_test/img2.png', 'http://139.9.141.135:8080/images_test/img3.png', 'http://139.9.141.135:8080/images_test/img3.png']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    //获取swiper内容
    wx.request({
      url: 'http://139.9.141.135:8080/json_test/swiper.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success:function(res){
        console.log("-----获取swiper----")
        that.setData({
          swiper:res.data
        })
        console.log(that.data.swiper)
      }
    })
    //获取最热门活动
    wx.request({
      url: 'http://139.9.141.135:8080/json_test/activities.json',
      data: '',
      header: {'Content-Type': 'application/json'},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        console.log("-----获取最新活动lastActivity-----")
        that.setData({
          lastActivity:res.data.act[0]
        })
        console.log(that.data.lastActivity)
      },
      fail: function(res) {
        console.log("-----获取最新活动失败-----")
      },
      complete: function(res) {},
    })
    //获取文章
    wx.request({
      url: 'http://139.9.141.135:8080/json_test/papers.json',
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log("-----获取文章paper----")
        that.setData({
          paper: res.data
        })
        console.log(that.data.paper)
      }
    })
    //
  },
  /**
   * 跳转活动页面
   */
  toActivities:function(){
    wx.switchTab({
      url: '../activities/activities',
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