// https://api.github.com/users/colt

$("#get").click(function(){
	$.get("https://api.github.com/users/colt")
	.done(function(data){
		$("p").text(JSON.stringify(data));
		console.log("lala");
	}).fail(function(err){
		$("p").text(err);
		console.log("lalahhhh");
	});
});

$("#post").click(function(){
	var temp = {name:"subha",age:"22"};
	$.post("https://api.github.com/users/colt",temp)
	.done(function(data){
		$("p").text(JSON.stringify(data));
		console.log(data);
	}).fail(function(err){
		$("p").text(err);
	});
});

$("#getjson").click(function(){
	$.getJSON("https://api.github.com/users/colt")
	.done(function(data){
		$("p").text(JSON.stringify(data));
		console.log(data);
	}).fail(function(err){
		$("p").text(err);
	});
});

