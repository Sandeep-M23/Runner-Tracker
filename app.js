 const goal = 25;
 let entries = []
 var entryWrapper = document.querySelector("#entries");

 var goalValue = document.querySelector("#target");
 goalValue,innerHTML = goal;
var form = document.querySelector("#form")
form.addEventListener("submit",handleSubmit)

var entry = document.querySelector("#entry");


function addNewEntry(newEntry){

	entryWrapper.removeChild(entryWrapper.firstElementChild);
	const listItem = document.createElement('li');
	const listValue = document.createTextNode(newEntry)

	listItem.appendChild(listValue);

	entryWrapper.appendChild(listItem)

}

function reducer(total, currentValue){
	return total + currentValue;
}

function calTotal(){
	 var totalValue = entries.reduce(reducer);
	 var displayTotal = document.querySelector("#total");
	 displayTotal.innerHTML = totalValue;

	 var progressTotal = document.querySelector("#progressTotal");
	 progressTotal.innerHTML = totalValue ;
}

function calAverage(){
	var average = (entries.reduce(reducer) / entries.length).toFixed(1);
	var displayAverage = document.querySelector("#averageDistance");
	displayAverage.innerHTML = average;
}
function weeklyHigh(){
	let high = document.querySelector("#weekHigh");
	const highValue = Math.max(...entries);
	high.innerHTML = highValue;
}

function calGoal(){
	const prgressCircle = document.querySelector("#progressCircle")
	 var totalValue = entries.reduce(reducer);
	 const completeTotal = totalValue / (goal /100);
	 if(completeTotal >100){
	 	completeTotal === 100;
	 }
	 prgressCircle.style.background =`conic-gradient(#ffffff ${completeTotal}%, #2d3740 ${completeTotal}% 100% )`
}
function handleSubmit(event){
	event.preventDefault();


	entryValue = parseInt(entry.value);


	if (isNaN(entryValue)) {
		entryValue= 0; 
	}


	if(!entry) return ;
		form.reset();


	entries.push(entryValue);
	addNewEntry(entryValue);
	calTotal();
	calAverage();
	weeklyHigh();
	calGoal();
}