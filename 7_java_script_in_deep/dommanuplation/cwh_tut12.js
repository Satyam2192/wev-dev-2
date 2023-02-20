console.log("welcome!! lets make a new website")
// let a=document;
// // a=a.all;
// // a=a.body;
// // a=a.forms[0];
// a=a.links[0].href;
// console.log(a);
// Array.from(a())
// 

// table dom manuplation
// const table_tag=document.body.children
// console.log(table_tag)

// with id dom
// const ulId=document.getElementById("child1")
// ulId.style.backgroundColor="orange"


// with class dom
// child1=document.getElementsByClassName("child1")
// console.log(child1)
// console.log(document.getElementsByTagName("child1"))


// const listItems=document.querySelector('#child1')
// console.log(listItems)

// >>>>> methods Attributes
// console.log(element.getAttribute("data"))
// console.log(element.setAttribute("order-placed","pending"))
// console.log(element.removeAttribute("order-placed"))
// console.log(element.hasAttribute("order-placed"))
// console.log(element.attributes)

// creating and REmoving  the node element

const newDiv = document.createElement("div")
// const newText = document.createTextNode("Hellow guys")
newDiv.innerHTML =`<div id="child1">
<ul id="element" data="valid">
    <li>Apple</li>
    <li>banana</li>
    <li>cheary</li>
    <li>orange</li>
</ul>
</div>`
// newDiv.appendChild(newText)
body.append(newDiv)
// body.prepend(newDiv)
// body.before(newDiv)
// firstdiv.replaceWith(newDiv)
// firstdiv.remove()