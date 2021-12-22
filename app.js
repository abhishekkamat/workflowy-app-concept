b=0;
function myFunction(){
    b=b+1
    a=document.createElement("div");
    c=document.createElement("li");
    c.innerHTML="Click here";
    document.getElementById("mydiv").innerHTML="";
    a.id="name"+b;
    a.innerHTML="<h1>This is Javascript</h1>"

    document.getElementById("mydiv").appendChild(a);
    document.getElementById("name"+b).appendChild(c);
}