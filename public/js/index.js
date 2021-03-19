//api calls

const { on } = require("../../config/connection");

//handle submission
 $(".update").on("click", function(event) {
     console.log('test')

  const id = $(this).data('id');
    console.log(id)
    
    var learned = {
      learned: 1
    }

    $.ajax("/api/" + id, {
      type: "PUT",
      data: learned
    }).then(
        function() {
           console.log("Topic has been learned.");
          location.reload();
    })
})

$(".topic-form").on("submit", function(event) {
  event.preventDefault();

  var data = {
    name: $('#name').val().trim(),
    summary: $('#summary').val().trim(),
    learned: 0
  }
  console.log(data)


  $.ajax("/", {
    type: "POST",
    data: data
  }).then(function() {
    console.log("the post request was successful")
    location.replace("/");
  })
       
})


