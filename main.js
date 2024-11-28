
$(document).ready(()=>{
    const updateSliderCounter =(current, total)=>{
        current = current < 10 ? "0" + current : current;
        total = total < 10 ? "0" + total : total;
        $(".slick-review-counter").text(current+"/"+total)
    };

    const $slickReview = $("#slick-review")

    $slickReview.on("init", function (ev, slick){
        console.log(slick)
        updateSliderCounter(slick.slickCurrentSlide() + 1, slick.slideCount);
    })


    $slickReview.slick({
        dots: false,
        prevArrow: '',
        nextArrow: '',
    })

    $slickReview.on('afterChange', function (ev, slick){
        updateSliderCounter(slick.slickCurrentSlide()+1, slick.slideCount);
    })

    $(".review-arrow-prev").click(function (){
        $("#slick-review").slick("slickPrev")
        console.log("213123")
    })
    $(".review-arrow-next").click(function (){
        $("#slick-review").slick("slickNext")
    })
    $('.panel-btn').click(function (){
        const t = $(this).parents(".panel");
        t.toggleClass("panel_open")
        t.toggleClass("panel_close")
        t.children(".panel-body").slideToggle(400)
    })
})