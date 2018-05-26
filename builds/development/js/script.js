$( document ).ready(function() {
    $('.horizontal-wrapper').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
    var vw = window.innerWidth;
    var vh = window.innerHeight;
    if(
        (vw === 1366 && vh === 768)
    ) {
        $('.hide-scroll').css('height', '405px');
    } else if(vw === 1024 & vh === 768) {
        $('.hide-scroll').css('height', '415px');
    } else if(vw === 1280 && vh === 800) {
        $('.hide-scroll').css('height', '445px');
    } else if(
        (vw === 1366 && vh === 1024) ||
        (vw === 1920 && vh === 1200)) {
        $('.hide-scroll').css('height', '620px');
    } else if (
        (vw === 768 && vh === 1024) ||
        (vw === 1024 & vh === 1366)) 
    {
        $('#home-gallery').removeClass('horizontal-wrapper');
        $('#home-gallery').addClass('column-view');
    }
});