 b=0;
function myFunction(node){
    var newNode=document.createElement("div");
    console.log(node.parentNode);
    let h1=document.createElement("h1");
    h1.innerHTML="Created Node";
    let b1=document.createElement("button");
    b1.innerHTML="Add Node";
    b1.setAttribute("onclick","myFunction(this)");
    newNode.appendChild(h1);
    newNode.appendChild(b1);
    newNode.setAttribute("id","node"+b);
    node.parentNode.appendChild(newNode);
    b=b+1;
    
}



