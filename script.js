
document.getElementById('addNewbtn').addEventListener('click',function(){
    
    // get notes input from users
    const textNotes = document.getElementById('inputField')
    const noteText  = textNotes.value
    
    const notesContainer = document.getElementById('notesContainer')
    let noteDiv = document.createElement('div')
    noteDiv.classList.add('note');
    let noteContent = document.createElement('li')
    noteContent.classList.add('text-left')
    noteContent.innerText = noteText
    noteDiv.appendChild(noteContent);
   
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa-solid', 'fa-trash','mt-6','hover');
    noteDiv.appendChild(iconElement)

    notesContainer.appendChild(noteDiv);
    textNotes.value = ''

    // Delete button
    iconElement.addEventListener('click',function(){ 

    let remove = noteDiv.parentNode.removeChild(noteDiv)

    })
})

