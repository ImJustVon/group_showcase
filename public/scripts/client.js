console.log('client.js works!');

$(function () {
  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function (res) {
      res.forEach(function(index){
        var $div = $('<div class="groupMember"></div>');
        $div.append('<img src="' + index.picUrl + '"/>');
        $div.append('<h2>' + index.name + '</h2>');
        $div.append('<p>'+index.bio+'</p>');
        $div.append('<p>Likes: <span id="' + index.name + '">0</span></p>');
        $div.append('<button class="' + index.name + '">LIKE ME</button>');
        $('#container').append($div);
      });
    },
  });
  $('#container').on('click', 'button', function (){
    $.ajax({
      type: 'POST',
      url: '/likes',
      data: $(this).attr('class'),
      success: getLikes,
    })
  })
});

function getLikes() {
  $.ajax({
    type: 'GET',
    url: '/likes',
    success: function(responseObj) {
      var select = $(this).attr('class');
      $('#' + select).text(responseObj.select);
    }
  })
}
