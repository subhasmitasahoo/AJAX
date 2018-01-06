var btn = document.querySelector("#btn");
var price = document.querySelector("#price");


btn.addEventListener("click",function(){
	var xhr = new XMLHttpRequest();
	xhr.open("GET","http://api.coindesk.com/v1/bpi/currentprice.json");
	xhr.send();
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			var data = JSON.parse(xhr.responseText);
			price.textContent = data.bpi.USD.rate+" "+data.bpi.USD.code;

			console.log(xhr.responseText);
		}
	}
});

