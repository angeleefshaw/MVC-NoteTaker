//api calls

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

$(".main-page").on("submit", function(event) {
  event.preventDefault();

       location.assign("/");
})
