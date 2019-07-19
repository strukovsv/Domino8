function replace_dir() {
  var re;    
  $('.post-body').each(function (i, item) {
    var sql = $(item).html();
    [
        ['dir="dm_num"'  , 'style="font-family: courier new,courier; color: black;"']
       ,['dir="dm_type"' , 'style="font-family: courier new,courier; color: #ff0000;"']
       ,['dir="dm_name"' , 'style="font-family: courier new,courier; color: blue;"']
       ,['dir="dm_ref"'  , 'style="font-family: courier new,courier; color: blue;"']
       ,['dir="dm_const"', 'style="font-family: courier new,courier; color: black;"']
       ,['dir="dm_comm"' , 'style="font-family: courier new,courier; color: green;"']
       ,['dir="dm_rtype"', 'style="font-family: courier new,courier; color: #ff0000;"']
    ].forEach(function(i) {
      re = new RegExp('(' + i[0] + ')', 'gui');
      sql = sql.replace(re, "$&" + i[1]);
    });
    
    $(item).html(sql);
  });
}

$(function() {
    // Заменить теги
    replace_dir();
});
