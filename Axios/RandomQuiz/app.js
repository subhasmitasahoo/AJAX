var btn = document.querySelector("#btn");
var question = document.querySelector("#question");
var answer = document.querySelector("#answer");

btn.addEventListener("click",function(){
	axios.get("https://opentdb.com/api.php?amount=10")
		.then(function(response){
			console.log(response);
			var data = response.data.results[0];
			question.textContent = data.question;
			answer.textContent = data.correct_answer;
		})
		.catch(function(err){
			if(err.response)
				console.log("Something wrong with response "+err.response.status);
			else if(err.request)
				console.log("Something wrong with request "+err.request);
			else
				console.log("Something wrong happened!");
		});
});

