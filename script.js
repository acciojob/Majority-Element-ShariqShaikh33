//your code here
function majorElement(arr){
	let half = Math.floor(arr.length/2);
	for(let i=0;i<arr.length;i++){
		let count = 0;
		for(let y=i;y<arr.length;y++){
			if(arr[y]==arr[i]){
				count++;
			}
		}
		if(count>=half){
			return arr[i];
		}
	}
	
}
// console.log(body); 
let arr = [1,2,2,1,2];
majorElement(arr);