mui.init({
    pullRefresh : {
        container:".section",//待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
        up : {
        height:'20px',//可选.默认50.触发上拉加载拖动距离
        range:'40px',//可选 默认100px,控件可下拉拖拽的范围
        auto:false,//可选,默认false.自动上拉加载一次
        contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
        contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
        callback :getVal //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
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


    var mySwiper2 = new Swiper(".factory_box", {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: {
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination"
        }
    });