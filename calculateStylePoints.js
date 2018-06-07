const calculateStylePoints = (styleNotes) => {
	
	//let min = Math.min.apply(Math, styleNotes); 
	//let max = Math.max.apply(Math, styleNotes); 
		
	  let max = Math.max(...styleNotes);
	  let min = Math.min(...styleNotes);
    
    return styleNotes.reduce((a, b) => a + b) - max - min;
};
module.exports = calculateStylePoints;



/*const calculateStylePoints = (styleNotes) => {
	let max = Math.max(...styleNotes);
    let min = Math.min(...styleNotes);
    
    return styleNotes.reduce((a, b) => a + b) - max - min;
};
module.exports = calculateStylePoints;*/

/*const calculateStylePoints = (styleNotes) => {
	const compareNotes = (a, b) => {return a-b};
	const array = styleNotes.sort(compareNotes);
	array.splice(0,1);
	array.pop();       //lub const array00 = array.slice(1,4)
	return 
		array.reduce((a, b) => a + b);
};
module.exports = calculateStylePoints;*/

 
/*
const tab = [310, 10, 310, 400, 31.5];

const compareNr = (a, b) => {return a-b};	
const tab0 = tab.sort(compareNr);

let min = tab0.splice(0,1);
let max = tab0.pop();

const sum = tab0.reduce((a, b) => a + b);

console.log(sum);

*/
