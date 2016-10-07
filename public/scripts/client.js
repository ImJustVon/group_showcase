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
    var name = $(this).attr('class');
    console.log('Name:', name);
    $.ajax({
      type: 'POST',
      url: '/likes',
      data: 'name=' + name,
      success: function(responseObj) {
        $.ajax({
          type: 'GET',
          url: '/likes',
          success: function(responseObj) {
            $('#' + name).text(responseObj[name]);
          }
        })
      }
,
    })
  })
});
