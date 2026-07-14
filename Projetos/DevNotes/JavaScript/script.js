/* Elementos */
const notesContainer = document.querySelector("#notesContainer")
const noteInput = document.querySelector("#noteContent")
const addNoteBtn = document.querySelector(".addNote")
/* Funções */

/* Variavel para criar um ID partir do 1 */
 let idCounter = 1;


/* Função do botão para salvar os dados e gerar um note com a função createNote */
function showNotes() {
    getNotes().forEach((note)=>{
        const noteElement = createNote(note.id, note.content, note.fixed)

        notesContainer.appendChild(noteElement)
    })
}

function addNote(){
    const notes = getNotes()


    const noteObject = {
        id: idCounter++,
        content: noteInput.value,
        fixed: false,
    }    

    const noteElement = createNote(noteObject.id, noteObject.content)

    notesContainer.appendChild(noteElement)

    noteInput.value = ""

    notes.push(noteObject);

    saveNotes(notes)
 }     


 /* Função parar criar e montar uma note dentro do html */
 function createNote (id, content, fixed){
    const element = document.createElement("div")
    element.classList.add("note")
    const textarea = document.createElement("textarea")
    textarea.value = content
    textarea.placholder = "Adicione algum texto"
    element.appendChild(textarea)

    return element

 }

  /* Local Storage */
 function getNotes(){
    const notes = JSON.parse(localStorage.getItem("notes") || "[]")

    return notes
 }


 function saveNotes(notes){
    localStorage.setItem("notes", JSON.stringify(notes))
 }

/* Eventos */

addNoteBtn.addEventListener("click", () => addNote())
        


/* Inicialização */

showNotes();


