$("#btn").click(function(){
	$.getJSON("https://random.cat/meow")
		.done(function(data){
			$("#photo").attr("src",data.file);
			console.log(data.file);
		})
		.fail(function(){
			console.log("Something went wrong!!!");
		});
});