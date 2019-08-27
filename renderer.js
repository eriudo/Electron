function saveFile(){
	var myBlob = new Blob(["teste"], {type: 'text/plain'});
	var blobUrl = URL.createObjectURL(myBlob);

	var link = document.createElement("a"); // Or maybe get it from the current document
	link.href = blobUrl;
	link.download = "aDefaultFileName.txt";
	link.innerHTML = "Click here to download the file";
	link.click()// Or append it whereever you want
}

//saveFile();
var currentQuestion = nextQuestion();

var countRight = 0;	
const relatorio = [];	
const alternativeA = document.querySelector("#alternativeA");
const alternativeB = document.querySelector("#alternativeB");
const alternativeC = document.querySelector("#alternativeC");
const rightQ = document.querySelector("#acertos");

alternativeA.addEventListener("click", answer);
alternativeB.addEventListener("click", answer);
alternativeC.addEventListener("click", answer);


renderQuestion();
function nextQuestion() {
	if (!questions.length) {
		console.log("acabou otaru");
		return;
	}
	const amountOfQuestions = questions.length;
	const pickedQuestionIndex  = Math.floor(Math.random() * amountOfQuestions-1);
	const [ pickedQuestion ] = questions.splice(pickedQuestionIndex, 1);

	return pickedQuestion;	
}


function renderQuestion(){

	alternativeA.innerText = currentQuestion[1];
	alternativeB.innerText = currentQuestion[2];
	alternativeC.innerText = currentQuestion[3];
}


function answer(event){
	if(currentQuestion[Number(currentQuestion[0])+1] === event.target.innerText){
		relatorio.push(currentQuestion[0]);
		countRight = relatorio.length;
		rightQ.innerText = countRight;



	}
	currentQuestion = nextQuestion();
	renderQuestion();



}
/*function voice(){
	script de como ler uma array em javascript

} ??????

function register(){

}

function letter_D(){

} ??????
function tempo(){

}*/ 

