/* _____________________________________________________________________
//                            CHAPTER 49 -------52
// ________________________________________________________________________*/



// _______________________QUESTION NO 01 (Collect data)_________//


// // ---FOR HTML---//


// <input id="email" type="text" placeholder="Enter your Email">
// <input id="passWord" type="text" placeholder="Enter your pasword">
// <button onclick="chec()">click</button>

// // --------------------------------------------------------//


function chec() {
    var a = document.getElementById("email")

    var b = document.getElementById("passWord")
    document.write(a.value + "</br>")
    document.write(b.value)
}

// _______________________QUESTION NO 02 ()_________//


// _______________________QUESTION NO 03 (TODO APP)_________//

// // ---FOR HTML---//


// <div>
// <input id="todo" type="text" placeholder="enter todo">
// <button onclick="myFunction()">Add task</button>
// <button onclick="deleteAll()">Delete All</button>

// </div>

// <div>
// <ol id="list">

// </ol>

// </div>

// // --------------------------------------------------------//

var list = document.getElementById("list")

function myFunction() {
    var item = document.getElementById("todo")

    // create li tag with java text node
    var li = document.createElement("li")
    var listtext = document.createTextNode(item.value)
    li.appendChild(listtext)
    list.appendChild(li)

    // create delete button
    var delBtn = document.createElement("button")
    var delText = document.createTextNode("delete")
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    delBtn.setAttribute("class", "text")
    delBtn.setAttribute("onclick", "deleteItem(this)")


    // create Edit Buttons
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    li.appendChild(editBtn)
    editBtn.setAttribute("class", "text")
    editBtn.setAttribute("onclick", "editItem(this)")



    item.value = ""
    console.log(li)
}

// for delete item

function deleteItem(e) {
    e.parentNode.remove()
}

// for delete All


function deleteAll() {
    list.innerHTML = ""
}

// for Edit

function editItem(ee) {
    var editvalue = prompt("enter edit value", ee.parentNode.firstChild.nodeValue)

    ee.parentNode.firstChild.nodeValue = editvalue
}
