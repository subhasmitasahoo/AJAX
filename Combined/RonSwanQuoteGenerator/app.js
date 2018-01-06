var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';

var xhr = new XMLHttpRequest();


$("#xhr").click(function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url);
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			$("#quote").text(JSON.parse(xhr.responseText));
			console.log(xhr.responseText);
		}
	}
});

$("#fetch").click(function(){
	fetch(url).then(function(response){
		if(!response.ok)
			throw Error("Something is wrong");
		console.log(response);
		response.json().then(function(data){
			$("#quote").text(data);
		});
		
	}).catch(function(err){
		console.log(err);
	});
});

$("#jquery").click(function(){
	$.getJSON(url).done(function(data){
		$("#quote").text(data);
		console.log(data);
	}).fail(function(err){
		console.log(err);
	});
});

$("#axios").click(function(){
	axios.get(url).then(function(response){
		$("#quote").text(response.data);
		console.log(response);
	}).catch(function(err){
		console.log(err);
	});
});

