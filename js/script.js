// wow.js 애니메이션
const animateCSS = (element, animation, delay) => {
    // 정규 표현식을 사용하여 "animate__"로 시작하는 모든 클래스 제거
    $(element).removeClass(function (index, className) {
        return (className.match(/(^|\s)animate\S+/g) || []).join(' ');
    });

    setTimeout(() => {
        $(element).addClass("animate__animated " + animation + " " + delay);
    }, 10);
};

$("#bg").css({ "clip-path": "circle(70.7% at 50% 50%)" })
animateCSS(".open-button-bg", "animate__zoomOut")
animateCSS(".open-button", "animate__zoomOut")
$(".pageInfo").css("bottom", "5%")

// 마우스 커서 효과
$("#scrollBg, #bg").on("mouseup", function () {
    $(this).css({ cursor: "url(./img/cursor/cursor-open.png) 10 15, auto" })
})
$("#scrollBg, #bg").on("mousedown", function () {
    $(this).css({ cursor: "url(./img/cursor/cursor-grabbing.png) 10 15, auto" })
})

// 섹션별 호버 효과
$("#scene1").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(5.8% at 50% 55%)" })
})

$("#scene2").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(5.8% at 89% 34%)" })
})

$("#scene3").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(7.3% at 38.5% 42%)" })
})

$("#scene4").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(6.8% at 80.8% 18.8%)" })
})

$("#scene5").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(6.8% at 84% 78%)" })
})

$("#scene6").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(5.8% at 48% 27.8%)" })
})

$("#scene7").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(7.3% at 12% 77%)" })
})

$("#scene8").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(7.3% at 13.5% 57%)" })
})

$("#scene9").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(6.8% at 51% 8%)" })
})

$("#scene10").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(5.8% at 81% 60%)" })
})

$("#scene11").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(7.8% at 52% 91%)" })
})

$("#scene12").on("mouseover", function () {
    $("#scrollBg").css({ "clip-path": "circle(7.8% at 13.5% 21%)" })
})

var chapterList = [["ONE", "Don’t look too hard for red flags—you’ll miss green ones", "When I first moved north to a bigger city and was actually exposed to a melting pot of humans, I quickly learned that most of these “red-flagged people” were lacking actual red flags. It was all a lie. It was the most eye-opening experience of my life."],
["TWO", "Build the place they pictured—not the place you did", "Creating the perfect space for those around you goes far beyond having a voice internally—you have to give them a voice externally, as well. My first experience with this happened when I moved to the frigid air of Chicago to work under mostly-frigid management."],
["THREE", "Support their dreams—or they’ll dream of leaving", "I know from experience that working in advertising, as grand and glorious as it may sound from the outside, often stunts the growth of creatives who are forced to adhere to strict brand guidelines and crazy client demands."],
["FOUR", "Know when to stand up for your team—and when to step back", "The prospect of standing up to a Big Client felt eerily like those times I had been punched in the gut as a kid, when my brother stepped back to let me learn. Standing our ground and sticking up for our team against BIG names and BIG dollars could leave us with nothing to show for our efforts."],
["FIVE", "Passion over profit—mix in projects that have real value", "I think sometimes, as employees, we feel like we have to check our identities at the door and embody what we’re working on. We tend to lose our voices, our passions, and our outside interests inside the office confines."],
["SIX", "Don’t beat your team down—especially to pitch new clients", "In 2022, Gallup, Inc. conducted one of the largest studies regarding employee frustration and burnout to date. It found that the five largest drivers of employees being “over it” were unfair treatment at work, unmanageable workload, unclear communication from managers, lack of manager support, and unreasonable time-based expectations."],
["SEVEN", "Promote talented employees—without forcing them into leadership", "Promotion of great talent shouldn’t have to equal forced leadership responsibilities. Elevate leaders into leadership roles and put everyone else in the places that make them the happiest and most successful."],
["EIGHT", "Employee time tracking—designed around mental health", "Company profit and employee well-being aren’t usually balanced on an equal scale, but both are crucial for a business to survive AND to have a reputation for treating humans right. Check the numbers around burnout and industry-specific overworking as of late. It is up to us to fix it."],
["NINE", "Transparency breeds trust—and causes people to give a shit", "As companies, and as leaders within those companies, we need to be extremely transparent with our teams. Invoke more transparency around leadership decisions, business ups and downs, and all of the twists and turns with the clients—both good and bad."],
["TEN", "Don't make distrust your default—or it's your fault", "We all have the legal right to call out sick. But there’s something that lurks in the corporate culture that feels a bit sinister, that uneasiness when people take sick days, as if it's frowned upon. They’re not being gladiatorial enough. Or they’re not being truthful."],
["ELEVEN", "Building the perfect work week—personalized to each individual", "Working quickly and efficiently, without wasting time, is a great thing for those who are capable. But the pressure to prove yourself passionate by staying for 10 to 12 hours per day, every day—a punishment in itself—increases if you know that you can get your work done in half that time, but have to stay for the other half just to prove a point."],
["TWELVE", "Treat your external vendors like partners—and like humans", "Why is it like this? The answer is simple: they don’t see non-employees as equals. As people who worked their butts off for that money. The companies asking for help often offload the grunt work or the work they’re not technically capable of handling to their “contracting partners.” But in doing so, they bastardize the use of the word “partner.”"]]

var chapterList2 = ["Don’t look too hard for red flags",
    "Build the place they pictured—",
    "Support their dreams—or",
    "Know when to stand up for your",
    "Passion over profit—mix in",
    "Don’t beat your team down—especially to pitch",
    "Promote talented employees—without forcing them",
    "Employee time tracking—designed around mental",
    "Transparency breeds trust—and causes people to give a shit",
    "Don't make distrust your default—or it's your fault",
    "Building the perfect work week—personalized",
    "Treat your external vendors like partners—"]

var chapterIndex = 1

// 챕터 내용 In
$(".wrap .scene").on("click", function () {
    var position = $(this).offset()
    chapterIndex = $(this).index() - 1
    $("#bg").css({ "clip-path": "circle(70.7% at 50% 50%)" })

    // 챕터별 텍스트
    setTimeout(function () {
        $(".chapterBox").css("bottom", "calc(50% - 490px)")

        $(".chapterBox h5").text("CH.")
        $(".chapterBox h1").text(chapterList[chapterIndex][0]).css({ "font-size": "7rem", "margin-bottom": "0px" })
        $(".chapterBox h3").text(chapterList[chapterIndex][1]).css({ "font-size": "50px" })
        $(".chapterBox p").text(chapterList[chapterIndex][2])
        $(".chapterBox img").attr("src", "./img/ch/" + (chapterIndex + 1) + "_chapter-content.svg").css({ "top": "40px" })
    }, 700)

    // 버튼
    animateCSS(".preBtn", "animate__fadeInLeft", "animate__delay-1s")
    animateCSS(".nextBtn", "animate__fadeInRight", "animate__delay-1s")
    $(".pnBtn").css({ "pointer-events": "auto" })
    $(".open-button, .open-button-bg").css({ "pointer-events": "none" })
    $(".chapterCloseBtn").css({ "right": "3%" })

    // 
    animateCSS(".open-button-bg", "animate__zoomOut")
    animateCSS(".open-button", "animate__zoomOut")
    // 

    var posX = $(this).position().left - $(this).width() * 3;
    var posY = $(this).position().top; - $(this).height() * 3;
    var scrollL = $('#scrollBox').scrollLeft();
    var scrollT = $('#scrollBox').scrollTop();
    $('#scrollBox').stop().animate({ 'scrollLeft': posX, 'scrollTop': posY }, 1200, 'easeInOutExpo');
    return false;
})

var animateNum = 1

// 챕터 내용 Out
$("#bg ,.chapterCloseBtn").on("click", function () {
    $(".wrap .scene").css({ "pointer-events": "auto" })
    $(".open-button, .open-button-bg").css({ "pointer-events": "auto" })
    $("#bg").css({ "clip-path": "circle(0% at 50% 50%)" })
    $(".preBtn").addClass("animate__fadeOutLeft")
    $(".nextBtn").addClass("animate__fadeOutRight")
    $(".chapterCloseBtn").css({ "right": "-10%" })

    $(".chapterBox").css("bottom", "-150%")

    animateCSS(".open-button-bg", "animate__zoomIn")
    animateCSS(".open-button", "animate__zoomIn")

    $(".open-button-bg, .open-button").css({ "pointer-events": "auto" })
})

$(".preBtn, .nextBtn").on("click", function () {
    // 0~11
    var className = $(this).attr("class")
    if (className == "preBtn") {
        chapterIndex--
        if (chapterIndex < 0) {
            chapterIndex = chapterList.length - 1
        }
    } else {
        chapterIndex++
        if (chapterIndex > chapterList.length - 1) {
            chapterIndex = 0
        }
    }

    $("#bg").css({ "clip-path": "circle(0% at 50% 50%)" })
    $(".currentChapter").fadeOut()
    $(".offcanvas.offcanvas-bottom").removeClass("show")
    setTimeout(function () {
        $(".wrap .scene").eq(chapterIndex).trigger('click')
    }, 1000)
})

$(".preBtn, .nextBtn").on("mouseover", function () {
    var index = $(this).index()
    if (index == 4) {
        $(this).children(".pnBtnAfter").css({ left: "0px" })
    } else {
        $(this).children(".pnBtnAfter").css({ right: "0px" })
    }
}).on("mouseout", function () {
    var index = $(this).index()
    if (index == 4) {
        $(this).children(".pnBtnAfter").css({ left: "210px" })
    } else {
        $(this).children(".pnBtnAfter").css({ right: "210px" })
    }
})


$(".open-button").on("click", function () {
    $(".chapterList").css({ "clip-path": "circle(72.0% at 50% 50%)" })
}).on("mouseover mouseout", function () {
    $(this).children().children().toggleClass("fa-beat-fade")
})

$(".chapterList .close-button").on("click", function () {
    $(".chapterList").css({ "clip-path": "circle(0.0% at 50% 93%)" })
}).on("mouseover mouseout", function () {
    $(this).children().children().toggleClass("fa-beat-fade")
})

$(".menu__item-inner").on("click", function () {
    var index = parseInt($(this).text()) - 1
    $(".chapterList").css({ "clip-path": "circle(0.0% at 50% 93%)" })
    setTimeout(function () {
        $(".wrap .scene").eq(index).trigger('click')
    }, 500)
})

$(".menu__item-inner").on("mouseover", function () {
    var index = parseInt($(this).text())
    animateCSS(".frame__links h3", "animate__flipInX")
    animateCSS(".frame__links img", "animate__fadeIn")
    $(".frame__links h3").text(chapterList2[index - 1])
    $(".frame__links img").attr("src", "./img/ch_g/" + (index) + ".png")
})

var countJs = false

$(".about .menu").on("scroll", function () {
    var scroll = $(this).scrollTop()
    var aHeight = $(".sectionTop").height() * 2.5
    var img = $(".sectionTop").height()

    // console.log(scroll)
    if (scroll < (aHeight - img)) {
        $(".about #book").stop().animate({ top: scroll })
        if (scroll > (img - img / 4)) {
            $(".about #book").css({ left: "55%" })
            $(".about #book").attr("src", "./img/book.png")
        } else {
            $(".about #book").css({ left: "5%" })
            $(".about #book").attr("src", "./img/book2.png")
        }
        $(".sectionBottom h1").addClass("animate__animated animate__fadeInDown animate__delay-1s")
        $(".sectionBottom p").addClass("animate__animated animate__fadeInDown animate__delay-2s")
        $(".sectionBottom h5").addClass("animate__animated animate__fadeInDown animate__delay-2s")
    }

    if (scroll < (aHeight / 2.5 * 2.4)) {
        if (countJs == false) {
            //-- Executing
            $('.number-counter').countTo();
            countJs = true
        }
    }
})

$(".open-button-bg #about").on("click", function () {
    $(".about").css({ "clip-path": "circle(70.7% at 50% 50%)" })
    $(".sectionTop h1").addClass("animate__animated animate__fadeInDown")
    $(".sectionTop h3").addClass("animate__animated animate__fadeInDown animate__delay-1s")
    $(".sectionTop p").addClass("animate__animated animate__fadeInDown animate__delay-1s")
    $(".sectionTop h4").addClass("animate__animated animate__fadeInDown animate__delay-1s")
})

$(".about i").on("click", function () {
    $(".about").css({ "clip-path": "circle(0.0% at 50% 100%)" })
    setTimeout(function () {
        $(".about").css({ "clip-path": "circle(0.0% at 50% 0)" })
    }, 1500)

    $(".sectionBottom h1").removeClass("animate__animated animate__fadeInDown")
    $(".sectionBottom p").removeClass("animate__animated animate__fadeInDown animate__delay-1s")
    $(".sectionBottom h5").removeClass("animate__animated animate__fadeInDown animate__delay-1s")
})

var timeoutId; // 타이머 식별자 변수를 전역으로 선언

$(".open-button-bg #buy").on("mouseover mouseout", function (e) {
    var btnClass = e.type;
    var animation = document.getElementById('buyAnimation');

    if (btnClass == "mouseout") {
        $("#buyAnimation").fadeOut();
        animation.stop();
        isPlaying = false;
        // mouseout 이벤트가 발생했을 때 이전에 설정한 타이머를 취소
        clearTimeout(timeoutId);
    } else {
        $("#buyAnimation").fadeIn();
        animation.play();
        isPlaying = true;

        // mouseover 이벤트가 발생했을 때 새로운 타이머 설정
        timeoutId = setTimeout(function () {
            $("#buyAnimation").fadeOut();
            animation.stop();
            isPlaying = false;
            return;
        }, 3000);
    }
});

$(".firstBtn").on("mouseover", function () {
    $(".firstBtn p").css({ "margin-left": "195px", opacity : "0" })
    $(".seachAnimationDiv").css({"clip-path": "circle(50% at 50% 50%)"})
}).on("mouseout", function () {
    $(".firstBtn p").css({ "margin": "0px", opacity : "1" })
    $(".seachAnimationDiv").css({"clip-path": "circle(0.0% at 50% 50%)"})
})

$(".firstBtn, #blackBg").on("click", function () {
    $("#blackBg").css({ "opacity": 0, "pointer-events": "none" })
    $(".wrap .scene").css({ "pointer-events": "auto" })
    $(".open-button, .open-button-bg").css({ "pointer-events": "auto" })
    $("#bg").css({ "clip-path": "circle(0% at 50% 50%)" })

    animateCSS(".open-button-bg", "animate__zoomIn")
    animateCSS(".open-button", "animate__zoomIn")

    $(".open-button-bg, .open-button").css({ "pointer-events": "auto" })
    $("#welcomeAnimation").fadeIn()
    var animation = document.getElementById('welcomeAnimation');

    if (animation) {
        animation.setSpeed(1.5);
        // 재생 중이 아닌 경우에만 재생
        if (!animation.isPlaying) {
            animation.play();
            setTimeout(function () {
                $("#welcomeAnimation").fadeOut()
            }, 5000)
        }
    }

    $(".pageInfo").css("bottom","-150%")
})

$(".chapterList .menu__item .menu__item-inner").on("mouseover mouseout", function (e) {
    var attrClass = e.type;
    var animation = this.children.namedItem("circleAnimation");
    animation.setSpeed(4);

    if (attrClass == "mouseout") {
        animation.stop();
        $(animation).fadeOut();
    } else {
        $(animation).fadeIn();
        if (!animation.isPlaying) {
            animation.play();
        }
    }
});


    (function ($) {
        $.fn.countTo = function (options) {
            return this.each(function () {
                //-- Arrange
                var FRAME_RATE = 60; // Predefine default frame rate to be 60fps
                var $el = $(this);
                var countFrom = parseInt($el.attr('data-count-from'));
                var countTo = parseInt($el.attr('data-count-to'));
                var countSpeed = $el.attr('data-count-speed'); // Number increment per second

                //-- Action
                var rafId;
                var increment;
                var currentCount = countFrom;
                var countAction = function () {              // Self looping local function via requestAnimationFrame
                    if (currentCount < countTo) {              // Perform number incremeant
                        $el.text(Math.floor(currentCount));     // Update HTML display
                        increment = countSpeed / FRAME_RATE;    // Calculate increment step
                        currentCount += increment;              // Increment counter
                        rafId = requestAnimationFrame(countAction);
                    } else {                                  // Terminate animation once it reaches the target count number
                        $el.text(countTo);                      // Set to the final value before everything stops
                        //cancelAnimationFrame(rafId);
                    }
                };
                rafId = requestAnimationFrame(countAction); // Initiates the looping function
            });
        };
    }(jQuery));