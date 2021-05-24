const Search = function () {
    let input = $("#type").val();
  
    $.get(`recipes/${input}`, function (data) {
      
  
      render(data);
    });
  };
  
  const render = function (data) {
  $("#results").empty();
    console.log(data.items);
    if(typeof data==="string"){
      $("#results").append(data) 
    }
    var source = $("#template").html();
    var temp = Handlebars.compile(source);
  
    var newItem = temp(data.items);
    $("#results").append(newItem); 
    console.log(data)
  };
  
  $(document).on('click', '.img', function() {
    let firstIng = $(this).closest('.result').find('.ingredients').find("ul").find('li:first').text()
    console.log(firstIng)
    alert(firstIng)
});
