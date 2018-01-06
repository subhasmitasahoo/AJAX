$("#btn").click(function(){
  $.ajax({
    method:"GET",
  url:"https://baconipsum.com/api/?type=meat-and-filler",
    dataType:"JSON"
  }).done(function(data){
    console.log(data);
    $("p").text(data[0]);
  }).fail(function(){
    console.log("Something Wrong Happened!")
  });
});