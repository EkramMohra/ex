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
    