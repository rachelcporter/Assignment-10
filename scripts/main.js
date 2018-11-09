$(document).ready(() => {

$('#venice').on('mouseenter',() => {
  $('#venice').attr('src','images/afterBoat.jpg');
}).on('mouseleave',() => {
  $('#venice').attr('src','images/beforeBoat.jpg');
});

$('#gucci').on('mousedown',() => {
  $('#gucci').attr('src','images/common.jpg');
}).on('mouseup',() => {
  $('#gucci').attr('src','images/future.jpg');
});

$('#blue').on('mouseenter',() => {
  $('#blue').attr('src','images/blue_color.jpg');
}).on('mouseleave',() => {
  $('#blue').attr('src','images/blue_none.jpg');
});

$('#beach').on('mouseenter',() => {
  $('#beach').attr('src','images/beach_after.jpg');
}).on('mouseleave',() => {
  $('#beach').attr('src','images/beach_before.jpg');
});







});
