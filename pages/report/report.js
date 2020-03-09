Page({

  /**
   * 页面的初始数据
   */
  data: {
    step:null,
    kll:null,
    je:null,
    sd:null,
    ywqz:null,
    zf:null,
    status:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
        var step=options.step
        this.setData({
          step:step,
          kll:step*0.01.toFixed(2),
          je:step*4*0.01.toFixed(2),
          sd: (step*0.1*3*0.01).toFixed(2),
          ywqz: (step*0.1*2*0.01).toFixed(2),
          zf: (step*0.14*0.24*0.01*4*0.01).toFixed(2),
          status: options.status
        })
        // 通过微信步数来计算其他的值
        console.log(step)
        
       
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
  lookReport:function(){
      console.log(step)
  }
})