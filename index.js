

let db;
const btncreateDB = document.getElementById("btn");
const btnAddNote = document.getElementById("btnaddNote")
btncreateDB.addEventListener("click", createDB)
btnAddNote.addEventListener("click", AddNote)

function AddNote(){
    const note ={
        title:"note",
        text:"this is my first note"

    }
    const tx = db.transaction("personal_notes","readwrite")
    const pNotes = tx.objectStore("personal_notes")
    pNotes.add(note)
}

function createDB(){
    
    const dbname = document.getElementById("textDB").value;
    const dbversion = document.getElementById("textVersion").value;
    const request = indexedDB.open(dbname , dbversion);
    request.onupgradeneeded = (e)=>{
        db = e.target.result
        const pNotes = db.createObjectStore("personal_notes", {keypath:"title"});
        const todoNotes = db.createObjectStore("todo_notes", {keypath:"title"});
        alert(`upgrade is called database name is ${db.name}`);
    }

    request.onsuccess = (e)=>{
        db = e.target.result;
        alert(`database called successfully ${db.name} and version is ${db.version}`);
    } 

    request.onerror = (e)=>{
        alert(`error ${e.target.error}`)
    }
}


 