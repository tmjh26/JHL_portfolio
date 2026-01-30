// 풀페이지
var myFullpage = new fullpage('#fullpage', {
    verticalCentered: true,
    anchors: ['anchor1', 'anchor2', 'anchor3', 'anchor4', 'anchor5'],
    menu: '#menu',
    scrollOverflow: true,
    scrollingSpeed: 1000, //스크롤 속도
    navigation: true, // 네비게이션 사용
    navigationPosition: 'right', //네비게이션 위치
    navigationTooltips: ['1', '2', '3', '4', '5', '6'], //네비게이션 호버 시 설명
    responsiveWidth: 999, //반응형 너비지정 999px일 때 스크롤 생김.
    afterResponsive: function (isResponsive) {
        
    }
});

