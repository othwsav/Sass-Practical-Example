$(document).ready(function (){
    // slider script
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
    // header menu script
    let after = false
    $(window).scroll(function (){
        if($(window).scrollTop() >= $("section.slider").outerHeight()){
            if(after == false){
                $("header.header.notm").addClass("fixedheader")
                .removeClass("topheader").offset({
                    top: -90
                })
                .animate({
                    top: 0
                }, {
                    duration: 700,
                    queue: false
                })

                $("section.slider").animate({
                    marginTop: "90px"
                }, {
                    duration: 700,
                    queue: false
                })

                after = true
            }
        } else{
            if(after == true){
                $("header.header.notm").animate({
                    top: "-90px"
                }, {
                    duration: 100,
                    queue: false,
                    complete: function (){
                        $(this).addClass("topheader")
                        .removeClass("fixedheader")
                        .animate({
                            top: 0
                        },0)
                    }
                })

                $("section.slider").animate({
                    marginTop: "139px"
                }, {
                    duration: 100,
                    queue: false
                })

                after = false
            }
        }
    })
    // mobile header menu
    let arabic = location.href.includes("index-rtl.html")
    $("header #mobile-button").on("click", function(){
        $("#mobile-overlay").fadeIn(300)
        if(arabic){
            $("header.header.mobile").animate({
                right: 0
            }, 500)
        } else{
            $("header.header.mobile").animate({
                left: 0
            }, 500)
        }
    })
    $("#mobile-overlay").on("click", function(){
        $(this).fadeOut(300)
        if(arabic){
            $("header.header.mobile").css({
                "right": "min(-35%, -300px)"
            })
        } else{
            $("header.header.mobile").css({
                "left": "min(-35%, -300px)"
            })
        }
    })
    // theme button
    $(".theme-button").click(function () {
        $(".colors").slideToggle(300)
    })
    let bgColor = localStorage.getItem("myTheme")//$("body").css('--bgColor');
    $(".theme-button").mouseenter(function () {
        $(".colors").css({
            "background": bgColor,
            // "border": "2px solid #f6f6f6"
        })

        $(".colors").toggleClass("on")
    })

    $(".theme-button").mouseleave(function () {
        $(".colors").css({
            "background": "#f6f6f6",
            // "border": "2px solid " + bgColor
        })

        $(".colors").toggleClass("on")
    })
    // changing theme on click
    let colorList = []
    $(".colors .color").each(function () { 
        colorList.push($(this).css("background-color"))
    })
    
    $(".colors .color").on("click", function (){
        $("body").css('--bgColor', colorList[$(this).index()])
        // setting local storage item
        localStorage.setItem("myTheme", colorList[$(this).index()])
        
        bgColor = $("body").css('--bgColor')
        $(".theme-button").click()
    })

    
    // getting local storage item
    const theme = localStorage.getItem("myTheme")
    if(theme)
        $("body").css('--bgColor', theme)


    // language switcher
    $(".langswitcher .lang-button").click(function () {
        $(".langswitcher .langlist").slideToggle()
    }) 
})