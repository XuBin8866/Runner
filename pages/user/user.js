const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    myPicture: '/images/myPicture.png',//头像
    markPicture: '/images/mark.png',//问号图片
    stuName: '张运楠',//姓名
    stuId: '20182427',//学号
    step: '13333',//今日步数
    yesStep:'23333',//昨日步数
    lastStep:'117643',//上周步数
    moInter: '23',//运动积分
    acInter: '56',//活动积分
    rnkInter: '38',//积分排行
    markId: "0",//运动积分解释id
    actId: "1",//活动积分解释id
    rnkId: "2",//积分排行解释id
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 退出登录
  quit:function(){
    wx.showModal({
      title: '提示',
      content: '你确定退出么',
      success(res) {
        if (res.confirm) {
          wx.switchTab({
            url: '../index/index',
          })
        } else if (res.cancel) {
          console.log('用户取消退出')
        }
      }
    })
  },
  // 昨日活动报告
  yestReport:function(){
      wx.navigateTo({ 
        url: '../report/report?step='+this.data.yesStep+'&status=0',
        success(res){
            console.log("成功跳转到昨日报告页面")
        },
        fail(res){
            console.log("跳转到昨日报告页面失败")
        }
      })
  },
  //上周活动报告
  lastReport:function(){
    wx.navigateTo({
      url: '../report/report?step='+this.data.lastStep+'&status=1',
      success(res){
          console.log("成功跳转到上周报告页面")
      },
      fail(){
        console.log("跳转到上周报告页面失败")
      }
    })
  },
  // 早检打卡
  daily:function(){
   wx.navigateTo({
     url: '../daily/daily',
     success(res){
       console.log("跳转早检打卡页面成功")
     },
     fail(res){
       console.log("跳转早检打卡页面失败")
     }
   })  
  },
  //点击活动事件
  actAll:function(){
    wx.switchTab({
      url: '../activities/activities',
    })
  },
  //点击登录
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //查看个人信息
  user_detail:function(){
    wx.navigateTo({
      url: '../user_detail/user_detail?stuId='+this.data.stuId,
      success: function(res) {
          console.log("跳转个人信息页面成功")
      },
      fail: function(res) {
          console.log("跳转个人信息页面异常")

      },

    })
  },
  //查看积分排行
  integral_rank:function(){
    wx.navigateTo({
      url: '../integral_rank/integral_rank?stuId=' + this.data.stuId,
      success: function(res) {
          console.log("成功跳转积分排行页面")
      },
      fail: function(res) {
          console.log("跳转积分排行页面异常")
      },

    })
  }



})