/**
 * Created by Administrator on 2018/8/25.
 */
$('#right-xm').click(function(){
    var pos = $('#tp-yd').css('margin-left')
    var _pos = pos.substring(0,pos.length-2)
    if(_pos>-2600){
        _pos = (_pos-780)+"px"
        console.log(_pos)
        $("#tp-yd").css("margin-left",_pos)
    }
})
$('#left-xm').click(function(){
    var pos = $('#tp-yd').css('margin-left')
    var _pos = pos.substring(0,pos.length-2)
    if(_pos<0){
        _pos = (parseInt(_pos)+780)+"px"
        console.log(_pos)
        $("#tp-yd").css("margin-left",_pos)
    }
})
$('.m').mouseover(function(){
    $('.big').css('color','#A0A0A0')
    $('.small').css('color','#A0A0A0')
})
$('.m').mouseout(function(){
    $('.big').css('color','#FFFFFF')
    $('.small').css('color','#FFFFFF')
})
$('.ba').mouseover(function(){
    $('#ad').css('color','#FFFFFF')
})
$('.ba').mouseout(function(){
    $('#ad').css('color','#1B1B1B')
})
function mouse(e1){
    e1.style.backgroundColor="#304A7E";
    e1.style.color="#FFFFFF";
}
function out(l1){
    l1.style.backgroundColor="#CFDFEF";
    l1.style.color="#000000"
}
