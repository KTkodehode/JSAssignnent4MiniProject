
// let canvas = document.createElement("canvas");
// let canvasContent = document.createElement("div")
// canvas.id = "canvasId";
// document.body.prepend(canvas);
// document.getElementById("canvasId").style ="width: 100%; height: 150px; border: 1px solid black;left: 20%;";


document.body.style="margin:0;background-repeat: no-repeat; background-size: cover; background-image: url(https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80); margin:0";

document.getElementById("top-title").onmouseover = function() {onmouseOver()};
document.getElementById("top-title").onmouseleave = function() {onmouseLeave()};
document.getElementById("top-title").style = "text-align: left; margin-left: 100px;"
document.getElementById("input-field").style = "margin-left:10px; margin-top: 5rem;float:left;"
document.getElementById("btn-push").style = "border-radius: 10px; width: 80px; height: 25px; margin-left: 1%; margin-top:5rem"
document.getElementById("btn-clear").style = "border-radius: 10px; width: 80px; height: 25px;"
document.getElementById("right-side").style = "border: 1px solid black;border-radius: 10px; width: 280px; height: 225px; float:right; margin-right: 20px; margin-top: 10px;"
document.getElementById("right-sides").style = "width: 280px; height: 125px; float:right; margin-right: 1px;"


function onmouseOver(){
    document.getElementById("top-title").style = "color: white; text-align: left;"
}

function onmouseLeave(){
    document.getElementById("top-title").style = "color: black;text-align: left;"
}

const centerPara = document.querySelectorAll("shop-container");
for (let i = 0; i < centerPara.length; i++) {
    centerPara[i].style= "font-size: 20px; letter-spacing: 2px; text-align:left;margin-top: 220px; float: left;"
    
}

// Shopping list Adding Function
function pushData() {
	let view = document.getElementById("view"); 
	let newItem = document.createElement("li");
    document.getElementById("view").style="list-style-type: none; font-size: 40px; margin-top: 10px; text-align:left;" 
	let inputText = document.getElementById("inputText").value; // returns input value
    // document.getElementById("inputText").style = "font-size:"
	let node = document.createTextNode(inputText); // create a text node and append it to the document
	newItem.appendChild(node); // List inserts user's input text
	view.appendChild(newItem); // Targets output and lists it in the new created element (list)
}

// Clear list
function clearList() {
    document.getElementById("view").innerText = "";
}

// tomt array til button clicks og if length < 3 - textcontent
document.querySelector("div").addEventListener('click', function () {
 
        //  document.getElementById("clickedXamount").textContent = 'Calm Down!';
    } 
)


// let bookOpt = document.querySelectorAll("selectorBooks");
// let fOpt = document.getElementById("firstOpt");
// let sOpt = document.getElementById("secondOpt");
// let tOpt = document.getElementById("thirdOpt");
// let foOpt = document.getElementById("fourthOpt");
// if (fOpt === true){
//     document.getElementById("clickedXamount").textContent = "Yes";

// }
// function renderImage() {
//     var selected = document.getElementById("selectOption");
//     var imgUrl = "";
//     if (selected.value == 1) {
//         imgUrl = "https://images.unsplash.com/photo-1641128208275-3bab75f6de61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80";
//     } else if (selected.value == 2) {
//         imgUrl = "https://images.unsplash.com/photo-1641128208275-3bab75f6de61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=434&q=80";
//     } else {
//         imgUrl = "https://giphy.com/embed/duNowzaVje6Di3hnOu";
//     }
// }
//     document.getElementById("myImg").src = imgUrl;

// // html override?
// let h1 = document.createElement("h1");                 // Creates a h1 element
// h1.append(document.createTextNode("Hello"));     // Moves the h1 element to a text node
// document.body.appendChild(h1).style="color:green; text-align: center; position: relative;";  // Moves the elemt to the HTML body


// let h2 = document.createElement("h2");
// h2.append(document.createTextNode("Shopping List: "));
// document.body.prepend(h2).style="color:white";                 // must use appendChild to style

// const paragraph = document.body.prepend(document.createElement('p'));
// paragraph.append(document.createTextNode("Help"));
// document.body.prepend(paragraph).style="font-size: 30px;"

// document.getElementById("btn-container").style="position:relative; height: 300px;"
// document.getElementById("btn").style="border-radius: 5%; font-size: 30px; position: absolute; top:50%; left:50%; transform: translate(-50%, -50%);";

// document.getElementById("top-title").style="text-align:center; margin-top: 200px;"

// height:100px; margin-top: 100px; display: inline-flex; margin-left: 50%; margin-right: auto; align-items:center;


