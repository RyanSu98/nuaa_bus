Date.prototype.pattern = function (fmt) {
  var o = {
    "M+": this.getMonth() + 1, //月份         
    "d+": this.getDate(), //日         
    "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时         
    "H+": this.getHours(), //小时         
    "m+": this.getMinutes(), //分         
    "s+": this.getSeconds(), //秒         
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度         
    "S": this.getMilliseconds() //毫秒         
  };
  var week = {
    "0": "1",
    "1": "0",
    "2": "0",
    "3": "0",
    "4": "0",
    "5": "0",
    "6": "1"
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    }
  }
  return fmt;
}


// pages/index/index.js
Page({

  /**
   * Page initial data
   */
  data: {
    date: '',
    table_data: [[[
      { time: "07:05", count: 1, dq: true },
      { time: "07:15", count: 1, dq: false },
      { time: "08:05", count: 1, dq: true },
      { time: "08:10", count: 1, dq: false },
      { time: "09:10", count: 1, dq: true },
      { time: "10:10", count: 1, dq: true },
      { time: "11:05", count: 1, dq: true },
      { time: "12:10", count: 1, dq: true },
      { time: "12:15", count: 1, dq: false },
      { time: "13:15", count: 1, dq: true },
      { time: "13:20", count: 1, dq: false },
      { time: "14:05", count: 1, dq: true },
      { time: "14:55", count: 1, dq: true },
      { time: "15:00", count: 1, dq: false },
      { time: "16:00", count: 1, dq: true },
      { time: "16:05", count: 1, dq: true },
      { time: "16:10", count: 1, dq: false },
      { time: "17:00", count: 1, dq: true },
      { time: "17:35", count: 1, dq: true },
      { time: "17:40", count: 1, dq: true },
      { time: "17:40", count: 1, dq: false },
      { time: "17:45", count: 1, dq: true },
      { time: "18:15", count: 1, dq: true },
      { time: "18:25", count: 1, dq: false },
      { time: "20:10", count: 1, dq: true },
      { time: "21:05", count: 1, dq: true },
      { time: "22:10", count: 1, dq: true }],
    [
      { time: "06:50", count: 1, dq: true },
      { time: "07:00", count: 2, dq: true },
      { time: "07:05", count: 2, dq: true },
      { time: "07:10", count: 1, dq: true },
      { time: "08:05", count: 1, dq: true },
      { time: "08:10", count: 1, dq: true },
      { time: "08:20", count: 2, dq: true },
      { time: "09:10", count: 2, dq: true },
      { time: "09:20", count: 1, dq: true },
      { time: "10:30", count: 1, dq: true },
      { time: "11:10", count: 1, dq: true },
      { time: "12:10", count: 1, dq: true },
      { time: "13:10", count: 2, dq: true },
      { time: "13:20", count: 1, dq: true },
      { time: "15:20", count: 2, dq: true },
      { time: "16:00", count: 1, dq: true },
      { time: "17:20", count: 1, dq: true },
      { time: "17:35", count: 1, dq: true },
      { time: "17:40", count: 1, dq: false },
      { time: "18:10", count: 1, dq: true },
      { time: "19:10", count: 1, dq: true },
      { time: "20:25", count: 1, dq: true },
      { time: "21:40", count: 1, dq: true }]],
    [
      [
        { time: "08:05", count: 1, dq: true },
        { time: "08:10", count: 1, dq: false },
        { time: "12:10", count: 1, dq: true },
        { time: "12:15", count: 1, dq: false },
        { time: "16:55", count: 1, dq: true },
        { time: "17:00", count: 1, dq: false },
        { time: "18:15", count: 1, dq: true },
        { time: "20:10", count: 1, dq: true },
        { time: "21:05", count: 1, dq: true },
        { time: "22:10", count: 1, dq: true }],
      [
        { time: "07:15", count: 1, dq: true },
        { time: "07:20", count: 1, dq: true },
        { time: "09:15", count: 1, dq: true },
        { time: "09:20", count: 1, dq: true },
        { time: "13:15", count: 1, dq: true },
        { time: "13:20", count: 1, dq: true },
        { time: "17:40", count: 1, dq: true },
        { time: "19:30", count: 1, dq: true },
        { time: "20:25", count: 1, dq: true },
        { time: "21:40", count: 1, dq: true }]]]

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var date = (new Date()).pattern("yyyy-MM-dd E");
    // var date = new Date().Format("yyyy-MM-dd");
    this.setData({
      date: date
    })
  },
  bindDateChange: function (e) {
    var time = (new Date(e.detail.value)).pattern("yyyy-MM-dd E");
    this.setData({
      date: time
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})