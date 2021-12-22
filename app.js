 b=0;
function myFunction(){
    b=b+1;
    a=document.createElement("div");
    document.getElementById("mydiv").innerHTML="";
    a.id="name"+b;
    a.innerHTML=`<h1>Node Name</h1>
                 <button onclick="myFunction1()">New Node</button>`

    document.getElementById("mydiv").appendChild(a);
}

function myFunction1(){
    b=b+1;
    a=document.createElement("div");
    a.id="name"+b;
    a.innerHTML=`<h1>Node Name</h1>
                 <button onclick="myFunction1()">New Node</button>`
    document.getElementById("name1").appendChild(a);

}
