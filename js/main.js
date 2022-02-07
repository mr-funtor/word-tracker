const wordsForm= document.querySelector('form');
const wordInput= document.querySelector('form input');
const statusModal= document.querySelector('.status-modal');
const allWordsDisplay= document.querySelector('.saved-words');
let allWords=[];

function showWords(){
	
	allWords=JSON.parse(localStorage.getItem('ASL')) || [];
	
	allWordsDisplay.innerHTML="";
	
	allWords.forEach((word)=>{
		allWordsDisplay.innerHTML+=`<p>${word}</p>`
	})
}

showWords()


wordsForm.addEventListener('submit',(e)=>{
	e.preventDefault();
	
	let newWord= wordInput.value;
	
	allWords.push(newWord);
	
	localStorage.setItem('ASL',JSON.stringify(allWords));
	
	showModal();//Displays to user that word has been saved
	
	showWords();//Redisplays all words
	
	wordInput.value="";
})

function showModal(){
	statusModal.style.visibility="visilble";
	
	setTimeout(()=>{
		statusModal.style.visibility="hidden";
	},2000)
}