var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

btn.addEventListener("click",function(){
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			console.log(xhr.responseText);
			var url = JSON.parse(xhr.responseText).message;
			img.src = url;
		}
	};
	xhr.open("GET","https://dog.ceo/api/breeds/image/random");
	xhr.send();
});