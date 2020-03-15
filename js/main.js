$(document).ready(function (){
    $("section.slider ul.bullets li").on('click', function(){
        $(this).addClass("active").siblings().removeClass("active");
        let thatNum = $(this).index() + 1;
        $("section.slider .active-img").animate({
            opacity : '0'
        },500, function(){
            $(this).css("background-image", `url("../../../images/slider/${thatNum}.jpg")`).animate({
                opacity : '1'
            },500)
        })
    })
})