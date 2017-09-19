!function i(t) {
    t(".nav-content-search-center").on("click", function (o) {
        o.stopPropagation(), t(".nav-content-center").hide(), t(".header-nav-hover").hide(), t(".nav-search-select").show(), t(".nav-content-search-center").addClass("search-spread")
    }), t(document).on("click", function (o) {
        t(".nav-content-center").show(), t(".nav-search-select").hide(), t(".nav-content-search-center").removeClass("search-spread")
    }), t(".nav-search-select").click(function () {
        t(".search-select-list").stop(!1, !1), t(this).hasClass("drop-down") ? t(this).removeClass("drop-down") : t(this).addClass("drop-down"), t(".search-select-list").slideToggle()
    }), t(".search-select-list li").click(function (o) {
        var n = t(this).text();
        var type = t(this).attr("data-type");
        t("#type").val(type);
        o.stopPropagation(),
        t(".nav-search-select li").removeClass("list-now"),
        t(this).addClass("list-now"),
        t(".search-select-type").text(n),
        h(n),
        t(".search-select-list").slideUp(), 
        t(".nav-search-select").removeClass("drop-down")
        
    }), t(".nav-search-center-input").val(""), t(".nav-search-center-text").click(function () {
        t(".nav-search-center-input").trigger("click").focus()
    }), t(".nav-search-center-input").on("keydown", function () {
        t(this).parent().find("label").hide()
    }), t(".nav-search-center-input").blur(function () {
        "" == t(this).val() && t(this).parent().find("label").show()
    }), t(".nav-content-list li").hover(function () {
        t(".nav-hover-type").children("div").hide(), t(".header-nav-hover").hide();
        var o = t(this).index();
        t(this).addClass("hover").siblings("li").removeClass("hover"), 1 == o ? t(".header-nav-hover,.nav-hover-zxgs").show() : t(".header-nav-hover").hide()
    }, function () {
        t(this).hasClass("have-arrow") || t(".nav-content-list li").removeClass("hover")
    });
    t(".header-nav-hover").hover(function () {
        t(".header-nav-hover").css("display", "block")
    }, function () {
        t(".nav-hover-type").children("div").hide(), t(".header-nav-hover").hide(), t(".nav-content-list li").removeClass("hover")
    }), t(".header-nav-content").on("mouseleave", function () {
        t(".nav-hover-type").children("div").hide(), t(".header-nav-hover").hide(), t(".nav-content-list li").removeClass("hover")
    }), t(".nav-app").on("mouseout", function (o) {
        o.stopPropagation(), t(".nav-content-list li").removeClass("hover")
    })
}($)