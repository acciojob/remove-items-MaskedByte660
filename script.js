//your JS code here. If required.
//add event listener to input
//then find the selected option using selectedIndex
//remove it.
document.querySelector("input").addEventListener("click",()=>{
	let dropDown = document.querySelector("colorSelect");
	dropDown.remove(dropDown.selectedIndex);
})