/* Exercise 1: Wish list */
function addToList(item){
//  $('#items').append('<li>' + item + '</li>');
  $('#items').append('<li>' + item + "<span class='label pending'>" + 'Pending' + '</span>' + '</li>');
}


$(document).on('click', '#add-to-list', function() {
addToList($('#item').val());
$('#item').val('');
$('#item').focus();


});
