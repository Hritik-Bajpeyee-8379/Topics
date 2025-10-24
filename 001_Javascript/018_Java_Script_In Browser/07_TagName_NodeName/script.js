       let div = document.getElementById("Box1")
        console.log(div.tagName); //out -- DIV
        console.log(div.nodeName); //out -- DIV

        let para = document.querySelector("u");
        let txt_node = para.firstChild

        console.log(txt_node.nodeName) //out - #text