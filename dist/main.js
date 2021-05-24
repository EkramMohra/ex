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
  
 const listener=function(obj,data){
    console.log(obj)
alert(data)

  }