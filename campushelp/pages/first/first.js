Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    tel: '',
    company: '',
    place: '',
    time: '',
    ps: '',
    tips: ''
  },
  tishiwin: function (e) {
    wx.showToast({
      title: '发布成功！'
    })
  },
  inputname: function (e) {
    this.setData(
      {
        name: e.detail.value
      }
    )
  },
  inputtel: function (e) {
    this.setData(
      {
        tel: e.detail.value
      }
    )
  },
  inputcompany: function (e) {
    this.setData(
      {
        company: e.detail.value
      }
    )
  },
  inputplace: function (e) {
    this.setData(
      {
        place: e.detail.value
      }
    )
  },
  inputtime: function (e) {
    this.setData(
      {
        time: e.detail.value
      }
    )
  },
  inputps: function (e) {
    this.setData(
      {
        ps: e.detail.value
      }
    )
  },
  inputtips: function (e) {
    this.setData(
      {
        tips: e.detail.value
      }
    )
  },
  fillkuaidi: function (options) {
    wx.navigateTo({
      url: '../kuaidi/kuaidi',
    })
  },
  fillwaimai: function (options) {
    wx.navigateTo({
      url: '../waimai/waimai',
    })
  },
  fillqita: function (options) {
    wx.navigateTo({
      url: '../qita/qita',
    })
  },
  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset() {
    console.log('form发生了reset事件')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onload: function (options) {

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