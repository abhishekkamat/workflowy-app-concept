 b=0;
function myFunction(node){
    var newNode=document.createElement("div");
    var ul1=document.createElement("ul");
    var li1=document.createElement("li");
    var li2=document.createElement("li");
    ul1.appendChild(li1);
    ul1.appendChild(li2);
    console.log(node.parentNode);
    let h1=document.createElement("h1");
    h1.innerHTML="Created Node";
    li1.appendChild(h1);
    let b1=document.createElement("button");
    b1.innerHTML="Add Node";
    b1.setAttribute("onclick","myFunction(this)");
    li2.appendChild(b1);
    newNode.appendChild(ul1);
    newNode.setAttribute("id","node"+b);
    node.parentNode.appendChild(newNode);
    b=b+1;    
}



