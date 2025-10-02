
        //** =============================
        //* 1. Get element by ID
        //** =============================
        let id = document.getElementById("id");
        id.style.backgroundColor = "aqua"; // Set header background color
        id.style.color = "red";             // Set header text color

        //** =============================
        //*2. Get elements by class name
        //** =============================
        let cname = document.getElementsByClassName("set1"); // currently empty in HTML

        //expl Convert existing elements' text to uppercase
        for (let el of cname) {
            let upper = el.innerText.toUpperCase();
            el.innerText = upper;8737777777779
        }
        // Note: If cname has elements, their text is converted to uppercase

        //** =============================
        //* 3. Get elements by tag name
        //** =============================
        let btn = document.getElementsByTagName("button"); //expl get all buttons
        let frstbtn = btn[0]; //expl first button
        frstbtn.style.color = "red"; //expl set button text color

        //** =============================
        //* 4. Get elements by name attribute
        //** =============================
        let name = document.getElementsByName("ent"); //expl input field

        name[0].style.backgroundColor = "yellow"; //expl highlight input background
        name[0].style.color = "red";               //expl input text color

        //** =============================
        //* 5. Query selector for list
        //** =============================
        let ul = document.querySelector(".lst"); //expl <ul> where <li> will be added

        // Add click event to the button
        frstbtn.addEventListener("click", () => {
            let txt = name[0].value; // get current input value
            let li = document.createElement("li"); //expl create new list item
            li.classList.add("set");               //expl add class for styling or future reference
            li.textContent = txt.toUpperCase();   //expl convert input to uppercase for consistency

            //expl Get all existing <li> elements with class "set"
            let licheck = document.querySelectorAll(".set");
            console.log(licheck); // debug: see all current <li> elements

            //expl Check for duplicates
            for (let el of licheck) {
                if (el.textContent === txt.toUpperCase()) {
                    console.log(el); //expl debug: show duplicate element
                    alert("Can't Place Same Car Name Twice"); //expl alert user
                    name[0].value = ""; // clear input
                    return; //expl stop function to prevent adding duplicate
                }
            }

            //expl If no duplicate, append new <li> to the list
            ul.append(li);
            name[0].value = ""; //expl clear input for next entry
        });
