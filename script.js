document.body.style="margin:0;background-repeat: no-repeat; background-size: cover; background-image: url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80); margin:0";

document.getElementById("top-title").onmouseover = function() {onmouseOver()};
document.getElementById("top-title").onmouseleave = function() {onmouseLeave()};
document.getElementById("top-title").style = "text-align: center;"
document.getElementById("input-field").style = "text-align:center; transform:scale(2);"
document.getElementById("btn-push").style = "border-radius: 10px; width: 80px; height: 25px;"

function onmouseOver(){
    document.getElementById("top-title").style = "color: white; text-align: center;"
}

function onmouseLeave(){
    document.getElementById("top-title").style = "color: black;text-align: center;"
}

const centerPara = document.querySelectorAll("shop-container");
for (let i = 0; i < centerPara.length; i++) {
    centerPara[i].style= "font-size: 20px; letter-spacing: 2px; text-align: center;margin-top: 200px;"
    
}

// Shopping list Adding Function
function pushData() {
	let view = document.getElementById("view"); 
	let newItem = document.createElement("li");
    document.getElementById("view").style="list-style-type: none; font-size: 30px;" 
	let inputText = document.getElementById("inputText").value; // returns input value
	let node = document.createTextNode(inputText); // create a text node and append it to the document
	newItem.appendChild(node); // List inserts user's input text
	view.appendChild(newItem); // Targets output and lists it in the new created element (list)
}
	




// // html override?
// let h1 = document.createElement("h1");                 // Creates a h1 element
// h1.append(document.createTextNode("Hello"));     // Moves the h1 element to a text node
// document.body.appendChild(h1).style="color:green; font-size: 80px; text-align:center; letter-spacing: 10px;";  // Moves the elemt to the HTML body




// let h2 = document.createElement("h2");
// h2.append(document.createTextNode("Shopping List: "));
// document.body.appendChild(h2).style="color:white";                 // must use appendChild to style

// const paragraph = document.body.appendChild(document.createElement('p'));
// paragraph.append(document.createTextNode("Help"));
// document.body.appendChild(paragraph).style="font-size: 30px;"

// document.getElementById("btn-container").style="position:relative; height: 300px;"
// document.getElementById("btn").style="border-radius: 5%; font-size: 30px; position: absolute; top:50%; left:50%; transform: translate(-50%, -50%);";


// document.getElementById("top-title").style="text-align:center; margin-top: 200px;"

// height:100px; margin-top: 100px; display: inline-flex; margin-left: 50%; margin-right: auto; align-items:center;


