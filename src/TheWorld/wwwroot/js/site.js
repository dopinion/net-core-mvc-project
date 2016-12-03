// site.js

(function () {

    //var ele = $("#username");
    //ele.text = "danmark arandia opinion";

    //var main = $("main");
    //main.on("mouseenter", function () {
    //    main.style.backgroundcolor = "#888";
    //});

    //main.on("mouseleave", function () {
    //    main.style.backgroundcolor = "";
    //});

    //var menuitems = $("ul.menu li a");
    //menuitems.on("click", function () {
    //    var me = $(this);
    //    alert(me.text());
    //});

    var $sidebarAndWrapper = $("#sidebar,#wrapper");
    var $icon = $("#sidebarToggle i.fa");

    $("#sidebarToggle").on("click", function () {
        $sidebarAndWrapper.toggleClass("hide-sidebar");

        if ($sidebarAndWrapper.hasClass("hide-sidebar")) {
            $icon.removeClass("fa-angle-left");
            $icon.addClass("fa-angle-right");
        } else {
            $icon.addClass("fa-angle-left");
            $icon.removeClass("fa-angle-right");
        }

    });

})();
