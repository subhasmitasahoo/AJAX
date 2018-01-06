// API endpoint: https://randomuser.me/api/

var btn = document.querySelector("#btn");
var avatar = document.querySelector("#avatar");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

btn.addEventListener("click",function(){
	fetch("https://randomuser.me/api/")
	.then(checkError)
	.then(parseJSON)
	.then(updateProfile)
	.catch(catchError);
});

function checkError(response){
	if(!response.ok){
		throw Error("Something wrong with status");
	}
	console.log(response.status);
	return response;
}

function parseJSON(response){
	return response.json().then(function(parsedRes){
			return parsedRes.results[0];
	});
}

function updateProfile(data){
	avatar.src = data.picture.medium;
	fullname.textContent = data.name.title+" "+data.name.first+" "+data.name.last;
	username.textContent = data.login.username;
	email.textContent = data.email;
	city.textContent = data.location.city;
}

function catchError(err){
	console.log("Something wrong happened!!!"+err);
}