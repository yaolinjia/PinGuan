

/*获得btn*/
 var btn = document.getElementById('btn')
 var spread = document.getElementById('spread')
 var iSpread = false
 /*高度*/
 var height = spread.scrollHeight
 /*总时间*/
 var time = 420;
 /*间隔*/
 var interval = 8.4
 /*速度*/
 var speed = height / (time / interval)
 /*点击事件*/
 btn.onclick = function (e) {
     btn.disabled = 'disabled'
     if (!iSpread) {
         var speeds = 0
         var timer = setInterval(function () {
             speeds += speed
             spread.style.height = speeds + 'px'

             if (parseInt(spread.style.height) >= height) {
                 clearTimeout(timer)
                 btn.disabled = ''
             }
         }, interval)
         this.innerHTML = '收起'
     } else {
         var speeds = height
         this.innerHTML = '查看更多'
         var timer = setInterval(function () {
             speeds -= speed
             spread.style.height = speeds + 'px'
             if (speeds <= 0) {
                 clearTimeout(timer)
                 btn.disabled = ''
             }
         }, interval)
     }
     iSpread = !iSpread
 }

mui.init({
    pullRefresh: {
        container: ".section",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
        up: {
            height: '20px',//可选.默认50.触发上拉加载拖动距离
            range: '40px',//可选 默认100px,控件可下拉拖拽的范围
            auto: false,//可选,默认false.自动上拉加载一次
            contentrefresh: "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
            contentnomore: '没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
            callback: getVal //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
        }
    }
});
let news = document.getElementsByClassName('find_factory_list')[0];
let aNew = news.getElementsByClassName('find_factory_item')[0];

function getVal() {
    let oDiv = document.createElement('div');
    oDiv.className = 'find_factory_item';
    oDiv.innerHTML = aNew.innerHTML;
    setTimeout(() => { //定时器，提升用户体验
        news.appendChild(oDiv)
        this.endPullupToRefresh(false)
    }, 1500);
}
