function put_input_obj() {
  /*
  fetch('https://evening-savannah-53967.herokuapp.com/static-forms-apikey')
  .then(response => response.text())
  .then(function(data) {
    document.getElementById("form_input").value = data;
  });
  */
  document.getElementById("form_input").value = "86128fb5-a309-431d-a5ab-6d3152b0a036";
}

// find elements
$("#staticform").submit(function(event) {
    event.preventDefault();
    $.ajax({
      url: 'https://api.staticforms.xyz/submit', // url where to submit the request
      type: "POST", // type of action POST || GET
      dataType: 'json', // data type
      data: $("#staticform").serialize(), // post data || get data
      success: function(result) {
        // you can see the result from the console
        // tab of the developer tools
        alert(JSON.parse(result));
      },
      error: function(xhr, resp, text) {
        alert(xhr, resp, text);
      }
    })
  });
