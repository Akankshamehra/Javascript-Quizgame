// below array are contain (question, options, correct answer)
const array = [ 
    { 
    Q:"1. Javascript is an __________ Language?", 
    options:["Object-Oriented", "Object-Based", "Procedural", "None of the above"], 
    correct:0
    }, 
    { 
    Q:"2. Which attribute is used to provide a unique name to an HTML element?", 
    options:["class","id", "type", "None Of these"], 
    correct:1
    }, 
    { 
    Q:"3. The CSS property used to specify the transparency of an element is?", 
    options:["opacity","visibilty", "filter", "None Of these"], 
    correct:0
    }, 
    { 
    Q:"4. What does the Javascript debugger statement do?", 
    options:["It will debug all the errors in the program at runtime","It will debug error in the current statement if any.", "It acts as a breakpoint in a program.", "All of the above."], 
    correct:2
    }, 
    { 
    Q:"5. How to vibrate a device using JS?", 
    options:["window.vibrate()", "document.vibrate", 
   "navigator.vibrate()", "Can't vibrate using JS"], 
    correct:2
    }, 
    { 
    Q:"6. When an operator's value is NULL, the typeof returned by the  unary operator is:", 
    options:["Boolean", "Undefined", "Object", "Integer"], 
    correct:2
    }, 
    { 
    Q:"7. In how many ways can CSS be written in?", 
    options:["1", "2", "3", "4"], 
    correct:2
    }, 
    { 
    Q:"8. Which of the following types of loops are not supported in Python?", 
    options:["for", "while", "do-while", "none of the above"], 
    correct:2
    }, 
    { 
    Q:"9. Which of the following concepts is not a part of Python?", 
    options:["Pointers", "Loops", "Dynamic Typing", "All of the above"], 
    correct:0
    }, 
    { 
    Q:"10. Which of the following statements are used in Exception Handeling in Python?", 
    options:["try", "exception", "finally", "All of the above"], 
    correct:3
    } 
   ]; 
// some important variables
const container = document.querySelector('.container');
const scoreContainer = document.querySelector('#score');
const quizLength = array.length;
let index = 0;
let turn = 1;
let score = 0;

const check = (e, index)=>{
	const btns = document.querySelectorAll('button');
	const answer = array[index].options[array[index].correct];
	
	// predict a answer
	if (e.innerText != answer) {
		console.log(index)
		e.style.background = '#f00';
		btns[array[index].correct].style.background = '#00d600';
	}else{
		score++;
		scoreContainer.innerText = score;
		btns[array[index].correct].style.background = '#00d600';
	}

	// remove a onclick property from buttons
	btns.forEach(element =>{
		element.removeAttribute('onclick');
	});

	// create a new button for next question and for inform when quiz end
	const newBtn = document.createElement('button');
	newBtn.setAttribute('class', 'newBtn');
	
	if (turn == quizLength) {
		newBtn.innerText = 'Quiz End';
	}else{
		newBtn.innerText = 'Next';
		newBtn.setAttribute('onclick', 'display()')
		turn++;
	}
	container.appendChild(newBtn);
}

const display = ()=>{
	let html = `<h1>${array[index].Q}</h1>
					<div class="buttons">
						<button onclick='check(this, ${index})'>${array[index].options[0]}</button>
						<button onclick='check(this, ${index})'>${array[index].options[1]}</button>
						<button onclick='check(this, ${index})'>${array[index].options[2]}</button>
						<button onclick='check(this, ${index})'>${array[index].options[3]}</button>
					</div>`; 
	container.innerHTML = html; 
	index++;
}

display(); // invoke a display function