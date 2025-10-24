let div = document.getElementById("box");

console.log(div.innerHTML);
//Out -     <p>Hello <b>World <i>From <u>Me</u></i></b></p>


console.log(div.outerHTML);

/* //out-<div id="box">   <p>Hello <b>World <i>From <u>Me</u></i></b></p>    </div>  */


div.innerHTML = "<h2>Simple Line</h2>"



div.outerHTML="<Section> <h1> New </h1> </Section>"
