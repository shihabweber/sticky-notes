let container_2=document.getElementsByClassName("container-2")[0]

let container_3=document.getElementsByClassName("container-3")[0]

let checkIcon=document.getElementById("check-icon")
let crossIcon=document.getElementById("cross-icon")
var note_Text=document.getElementById("note-text")

var i=0

crossIcon.addEventListener("click",function(){
	
	typenote()
	
	
	
})

checkIcon.addEventListener("click",function(){
	createNote()
})

function typenote(){
	
	if(container_3.style.display=="none"|container_3.style.display==""){
		container_3.style.display="block"
		
	
	}else{
		container_3.style.display="none"
		
		
	}
}

function createNote(){
	noteText=note_Text.value
	

	var node0=document.createElement("div")
	var node1=document.createElement("h1")
	node1.innerHTML=noteText
	node1.setAttribute("style","width:250px;height:250px;font-size:26px;padding:25px;margin-top:10px;overflow:hidden;;box-shadow:0px 10px 24px 0px rgba(0,0,0,.75)")
	document.getElementById("note-text").value=""
	node1.style.margin=margin()
	node1.style.transform=rotate()
	node1.style.background=color()
	
	
	node0.appendChild(node1)
	
	container_2.insertAdjacentElement("beforeend",node0)
	
	
	node0.addEventListener("mouseenter",()=>{
		node0.style.transform="scale(1.2)"
	})
	node0.addEventListener("mouseleave",()=>{
		node0.style.transform="scale(1)"
	}) 
	node0.addEventListener("dblclick",()=>{
		node0.remove()
	}) 
	
}

function margin(){
	var random_margin=["-5px","1px","5px","10px","15px","20px"]
	return random_margin[Math.floor(Math.random()*random_margin.length)]
}

function rotate(){
	var random_rotate=["rotate(3deg)","rotate(1deg)","rotate(-1deg)","rotate(-3deg)","rotate(-5deg)","rotate(-10deg)"]
	return random_rotate[Math.floor(Math.random()*random_rotate.length)]
}

function color(){
	var random_color=["#c2ff3d","#ff3de8","#3dc2ff","#04e022","#bc83e6","#ebb328"]
	if (i>random_color.length-1){
		i=0;
	}
	return random_color[i++]
}

note_Text.addEventListener("keyup",e=>{

	let notetext=note_Text.value.trim()
	if (e.key=="Enter" && notetext) {
		
			createNote()
		
	}
	
	
})