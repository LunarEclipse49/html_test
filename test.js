$(".openbtn").click(function () { //ボタンがクリックされたら
    console.log("test")
    $(this).toggleClass('active'); //ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive'); //ナビゲーションにpanelactiveクラスを付与
    $(".circle-bg").toggleClass('circleactive'); //丸背景にcircleactiveクラスを付与
});

$(".button_charactor").click(function () {
    console.log($(this).id)
})

$(function () {
    for (let i in [...Array(52).keys()]) {
        $("#characterList").append(
            $("<li></li>", {
                class: "Chart-Block"
            }).append(
                $("<div>", {
                    class: "character",
                    id: i,
                    text: i
                })
            )
        )
    }
})