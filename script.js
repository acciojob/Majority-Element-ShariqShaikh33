//your code here
async function fetchURL(URL){
	let response = await fetch(URL);
	let data = await response.json();
}
function findMajority(arr){
	let half = Math.floor(arr.length/2);
	for(let i=0;i<arr.length;i++){
		let count = 0;
		for(let y=i;y<arr.length;y++){
			if(arr[y]==arr[i]){
				count++;
			}
		}
		if(count>half){
			return arr[i];
		}
	}
	
}
// console.log(body); 
let array = [];
fetchURL("http://localhost:3000/majorityElementChecker").then(
	(data)=>{
		array = data.arr;
	}
)
findMajority(array);