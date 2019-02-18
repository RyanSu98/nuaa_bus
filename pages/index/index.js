var setTimeToday = function () {
  var date_today = new Date()
  var year = date_today.getFullYear()
  var month = date_today.getMonth() + 1;
  var date = date_today.getDate();
  var date_today_string = year+'-'+month+'-'+date;
  this.setData({
    date_today: date_today_string
  })
  return date_today_string;
}

var setPageData = function(time=null){
  wx.showNavigationBarLoading()
  var that=this
  that.setData({
    date_set: time
  })
  wx.request({
    url: 'https://api.rvfu98.com/nuaa_bus/?time='+time,
    success: function(res){
      that.setData({
        page_data: res.data
      })
    },
    fail: function(){
      wx.showModal({
        title: '数据加载失败',
        content: '请检查网络配置或i@suruifu.com',
      })
      that.setData({
        page_data: {}
      })
    },
    complete: function(){
      wx.hideNavigationBarLoading()
    }
  })
  
}

// 初始化页面
Page({
  setTimeToday: setTimeToday,
  setPageData: setPageData,
  data: {
  },
  onShow: function (options) {
   var time_today = this.setTimeToday();
   this.setPageData(time_today)
  },
  bindDateChange: function (e) {
    this.setPageData(e.detail.value)
  }
})