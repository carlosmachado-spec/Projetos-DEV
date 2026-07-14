/* Elementos */
const notesContainer = document.querySelector("#notesContainer")
const noteInput = document.querySelector("#noteContent")
const addNoteBtn = document.querySelector(".addNote")
/* Funções */

function addNote(){
    const noteObject = {
        id: idCounter++,
        content: noteInput.value,
        fixed: false,
    }

    const noteElement = createNote(noteObject.id, noteObject.content)

    notesContainer.appendChild(noteElement)
 } 
/* Variavel para criar um ID partir do 1 */
 let idCounter = 1;

 function createNote (id, content, fixed){
    const element = document.createElement("div")
    element.classList.add("note")
    const textarea = document.createElement("textarea")
    textarea.value = content
    textarea.placholder = "Adicione algum texto"
    element.appendChild(textarea)

    return element

 }
 
/* Eventos */

addNoteBtn.addEventListener("click", () => addNote())
        



