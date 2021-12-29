 b=0;
/*function myFunction(node){
    var newNode=document.createElement("div");
    var ul1=document.createElement("ul");
    var li1=document.createElement("li");
    var li2=document.createElement("li");
    ul1.appendChild(li1);
    ul1.appendChild(li2);
    let h1=document.createElement("h1");
    h1.innerHTML="Created Node";
    li1.appendChild(h1);
    let b1=document.createElement("button");
    b1.innerHTML="Add Node";
    b1.setAttribute("onclick","controller(this)");
    li2.appendChild(b1);
    newNode.appendChild(ul1);
    newNode.setAttribute("id","node"+b);
    node.parentNode.appendChild(newNode);
    b=b+1;    
}*/

function controller(node){
    div1=model();
    div2=view(div1);
    node.parentNode.appendChild(div2);
}

function model(){
    var div1=document.createElement("div")
    var ul1=document.createElement("ul");
    var li1=document.createElement("li");
    var li2=document.createElement("li");
    ul1.appendChild(li1);
    ul1.appendChild(li2);
    div1.appendChild(ul1);
    return div1;
}

function view(div1){
    let h1=document.createElement("h1");
    h1.innerHTML="Created Node";
    let b1=document.createElement("button");
    b1.innerHTML="Add Node";
    b1.setAttribute("onclick","controller(this)");
    div1.querySelector('ul li').appendChild(h1);
    div1.querySelectorAll('ul li')[1].appendChild(b1);
    console.log(div1);
    return div1;
}


