
$(document).ready( function() {
    $(".clickpage").hide();
     $(".line").hide();
     
$(".submitBtn").click(function (){
$(".mainpage").hide();
$(".clickpage").show();
$(".line").show();

$("#userInput").css({'margin-top':'-95px','margin-left':'190px','position':'absolute'});
$(".submitBtn").css({'margin-top':'-53px','margin-left':'230px','position':'absolute'});
$(".random").css({'margin-top':'-53px','margin-left':'410px','position':'absolute'});
});
});
function othername() {
    var input = document.getElementById("userInput").value;
    alert(input);
}