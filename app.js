b=0;
function myFunction(){
    b=b+1
    a=document.createElement("div");
    c=document.createElement("li");
    c.innerHTML="New Node";
    document.getElementById("mydiv").innerHTML="";
    a.id="name"+b;
    a.innerHTML="<h1>Node Name</h1>"

    document.getElementById("mydiv").appendChild(a);
    document.getElementById("name"+b).appendChild(c);
}
