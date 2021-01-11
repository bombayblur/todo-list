var userField = document.querySelector('#userItemForm');
userField.addEventListener('submit',itemAdder);
var list = document.querySelector('#items')


function itemAdder(e) {
    e.preventDefault();

    //Get User Input and create a node userInput
    var userInput = document.createTextNode(document.querySelector('#userItem').value);
    document.querySelector('#userItem').value = null; //clears field after use
    
    //Create delete button
    var newDelBtn = document.createElement('button');
    newDelBtn.className = 'btn btn-danger btn-sm float-right delete';
    newDelBtn.appendChild(document.createTextNode('X'));
    
    //Create list item
    var newItem = document.createElement('li');
    newItem.className = "list-group-item";

    // Create Edit Button
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-outline-success btn-sm float-right mr-2 edit';
    editBtn.appendChild(document.createTextNode('edit'));
    
    //Create Edit Field
    var createField = document.createElement('input');
    createField.className = 'form-control editField';
    createField.style.display = 'none';
    

    //Constructing
    newItem.appendChild(userInput);
    newItem.appendChild(createField);
    newItem.appendChild(newDelBtn);
    newItem.appendChild(editBtn);

    //Insert the whole thing into the list
    list.appendChild(newItem); 

    console.log(newItem);
}

var delBtn =  document.getElementById('items');
console.log(delBtn);

var list = document.getElementById('items');
list.addEventListener('click' , listItemAction);

function listItemAction(e){
    
    var target = e.target;
    var editFieldEdit = e.target.previousElementSibling.previousElementSibling;
     
    //prevents erase when edit is pressed twice
     // address of text field
    // var editField = e.target.parentElement.querySelector('input');
    

    if(e.target.classList.contains('delete')) { //delete functionalityy
        if(confirm("Are you sure?")) {
            var itemToDel = target.parentElement; // targets for deletion
            list.removeChild(itemToDel);
        }


    }   else if (e.target.classList.contains('edit')  && editFieldEdit.style.display != "block") { //edit functionality
            
            editFieldEdit.style.display = "block";
            var itemEarlierText = e.target.previousElementSibling.previousElementSibling.previousSibling.textContent;
            editFieldEdit.value = itemEarlierText;
            e.target.previousElementSibling.previousElementSibling.previousSibling.textContent = ""; //Erase original entry

            //Inser Save button
            var saveBtn = document.createElement('button');
            saveBtn.className = 'btn btn-success btn-sm float-right mr-2 save';
            saveBtn.appendChild(document.createTextNode('Save'));
            target.parentElement.appendChild(saveBtn);


    }   else if(e.target.classList.contains('save')) { // Save Functionality
            var editFieldSave = e.target.previousElementSibling.previousElementSibling.previousElementSibling;
            
            editFieldSave.style.display = "none"; //Remove typing field
            
            var newEdits = editFieldSave.value; //Copy
            editFieldSave.previousSibling.textContent = newEdits; //Copy typed data
            e.target.parentElement.removeChild(e.target);
            

    }
}



var searchBox = document.querySelector('#searchField');
searchBox.addEventListener('input',searchOperation);

function searchOperation(e){
    var text = e.target.value.toLowerCase();
    var itemsToSearch = items.getElementsByTagName('li');

    Array.from(itemsToSearch).forEach(function(item){
        itemString = item.firstChild.textContent;
        if(itemString.toLowerCase().indexOf(text) != -1){
            item.style.display="block";
            console.log(itemString.toLowerCase().indexOf(text)); //just peeking
        } else {
            item.style.display="none";
        }
        
    });

    console.log(itemString);
}

