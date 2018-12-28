// 引入数据文件
var data = require('./data.js'); // Import data from data.js

// 判断是否是工作日
var is_workday = function(date){
  var _month = date.getMonth()+1
  var _date = date.getDate()
  var _day = date.getDay()
  // 12.29
  if (_month == 12 && _date == 29) return true;
  if (_month == 12 && (_date==30 || _date == 31)) return false;
  if (_month == 1 && _date == 1) return false;
  return !(_day==0|_day==6);
}

// 获取当前时间[月份，日期，是否是节假日]
var setTime = function(date=null){
  var date = date?(new Date(date)):(new Date())
  var time = {};
  time.month = date.getMonth() + 1;
  time.date = date.getDate();
  time.is_workday = is_workday(date);
  this.setData({
    time: time
  })
}

// 初始化页面
Page({
  setTime: setTime,
  data: {
    time:{},
    bus_time_table: data.bus_time_table
  },
  onShow: function (options) {
    var time = this.setTime();
  },
  bindDateChange: function (e) {
    var time = this.setTime(e.detail.value);
  }
})