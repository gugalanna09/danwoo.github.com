$(document).ready(function(){   // 사이드 메뉴의 상위 메뉴 클릭시 하위 메뉴 출력 및 감춤  //
    $(".blind").css("display", "none"); // class=blind를 감춤 //
    $(".title").click(function(){
        if ($(this).hasClass("active")){ //haClass 함수 사용//
        $(this).next().slideUp("fast"); // css("dispaly", "none"을 사용사 끊어지면 발생) //
        $(this).removeClass("active"); //has or addClass에 '.'사용 불가
        } else {
            $("#navi").find(".active").next().slideUp("fast");  
            //id=navi의 하위요소에서 class=active를 지닌 요소를 찾아냄(slideDwon되어있는 요소) //
            //class=active인 요소의 근접요소를 slideUp //
            $("#navi").find(".active").removeClass("active");
            //동시에 class=active를 지움 //
            $(this).addClass("active"); //클릭한 요소에 class = active를 추가 //
            $(this).next().slideDown("fast"); //클릭한 요소의 근접 요소를 slideDown //
           
        }
    });
});

$(document).ready(function(){  //class = wrapper에 있는 버튼 클릭시 사이트 메뉴 출력 및 감츰 //
    $("sidemenu").css("display", "none");

    $(".smBtn").click(function(){ 
        if ($(".sidemenu").hasClass("active")){ //hasClass 사용 //
            $(".sidemenu").css("width", "0px");
            $(".sidemenu").css("display", "none");
            $(".wrapper").css("width", "100%"); //사이드 메뉴가 출력시 전체의 100% 너비 //
            $(".sidemenu").removeClass("active");
        } else {
            $(".sidemenu").addClass("active");
            $(".sidemenu").css("width", "200px"); // 사이드 메뉴 출력시 200px 고정 //
            $(".sidemenu").css("display", "block");
            $(".wrapper").css("width", "89%"); //사이드 메뉴 출력시 전체 너비의 83% 너비//
        }
    });
});