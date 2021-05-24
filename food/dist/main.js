const Search = function () {
    let input = $("#type").val();
  
    $.get(`recipes/${input}`, function (data) {
      
  
      render(data);
    });
  };
  
  
  $(document).on('click', '.img', function() {
    let firstIng = $(this).closest('.result').find('.ingredients').find("ul").find('li:first').text()
    alert(firstIng)
});
