var url = "https://api.github.com/users/colt";
var input = document.querySelector("#input");
var btn = document.querySelector("#btn");
var resStatus = document.querySelector("#status");


btn.addEventListener("click",function(){
	url = input.value;
	if(url == ""){
		resStatus.textContent = "Kindly Enter the URL";
		resStatus.style.color = "orange";
	}else{
	fetch(url)
	.then(function(res){
		if(!res.ok){
			throw Error(res.status);
		}
		return res;
	}).then(function(res){
		resStatus.textContent = res.status;
		resStatus.style.color = "blue";
		console.log(res);
	})
	.catch(function(err){
		if(err)
			resStatus.textContent = err;
		else
			resStatus.textContent = "Undefined error";
		resStatus.style.color = "red";
		console.log(err.status);
	});
}
});
