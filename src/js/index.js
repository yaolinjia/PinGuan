var swiper = new Swiper('.swiper-container-y', {
  slidesPerView:2.71,
  spaceBetween:10,
  freeMode: true,
});
var mySwiper = new Swiper('.swiper-container', {

  loop: true, // 循环模式选项
  autoplay: true,
  pagination: {
    el: '.swiper-pagination',
  },


})
mui.init({
  pullRefresh: {
    container: ".newValues", //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
    up: {
      height: '20px', //可选,默认50px.下拉刷新控件的高度,
      range:'40px', //可选 默认100px,控件可下拉拖拽的范围
      auto: false, //可选,默认false.自动上拉加载一次
      contentrefresh: "正在加载更多的数据...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
      contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
      callback: getVal
    }
  }
});
let news = document.getElementsByClassName('news')[0];
let aNew = news.getElementsByClassName('news-panel-two')[0];

function getVal() {
  let oDiv = document.createElement('a');
  oDiv.className = 'news-panel-two';
  oDiv.innerHTML = aNew.innerHTML;
  setTimeout(() => { //定时器，提升用户体验
    news.appendChild(oDiv)
    this.endPullupToRefresh(false)
  }, 1500);
}

mui('.mui-scroll-wrapper-con').scroll({
  scrollY: true, //是否竖向滚动
  scrollX: false, //是否横向滚动
  startX: 0, //初始化时滚动至x
  startY: 0, //初始化时滚动至y
  indicators: false, //是否显示滚动条
  deceleration: 1, //阻尼系数,系数越小滑动越灵敏
  bounce: true //是否启用回弹
});
mui('body').on('tap','a',function(){ 
  window.top.location.href=this.href; 
  });


