

const myLibrary = [];
const contents = document.querySelector(".contents");
const btnRemove = document.querySelectorAll(".remove");
let index = 0;

function Book(title, author, pages, read) {

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
   const book = new Book(title, author, pages, read);
   myLibrary.push(book);
   index = index + 1;
   book.index = index;
  
   
   createBookLibrary(title, author, pages, read, index);
}

function createBookLibrary(title, author, pages, read, index) {
    
        const div = document.createElement("div");
        const divTitle = document.createElement("div");
        const divAuthor = document.createElement("div");
        const divPages = document.createElement("div");
        const divRead = document.createElement("div");
        const button = document.createElement("button");
        contents.appendChild(div);
        div.appendChild(divTitle);
        div.appendChild(divAuthor);
        div.appendChild(divPages);
        div.appendChild(divRead);
        div.appendChild(button);

        div.classList.add("cBox");
        divTitle.setAttribute("id", "title");
        divTitle.textContent = title;
        divAuthor.setAttribute("id", "author");
        divAuthor.textContent = author;
        divPages.setAttribute("id", "pages");
        divPages.textContent = pages;
        divRead.setAttribute("id", "read");
        divRead.textContent = read;
        button.classList.add("remove");
        button.textContent = "Remove";
        button.setAttribute("id", `${index}`);

        button.addEventListener("click", ()=> {
            
            myLibrary.splice( myLibrary.findIndex(a => a.index === index) , 1);
              console.log("atas");
            refreshBookLibrary();
        });


   
}

function refreshBookLibrary() {
    deleteView();
    myLibrary.forEach((book) => {
        const div = document.createElement("div");
        const divTitle = document.createElement("div");
        const divAuthor = document.createElement("div");
        const divPages = document.createElement("div");
        const divRead = document.createElement("div");
        const button = document.createElement("button");
        contents.appendChild(div);
        div.appendChild(divTitle);
        div.appendChild(divAuthor);
        div.appendChild(divPages);
        div.appendChild(divRead);
        div.appendChild(button);
        div.classList.add("cBox");
        divTitle.setAttribute("id", "title");
        divTitle.textContent = book.title;
        divAuthor.setAttribute("id", "author");
        divAuthor.textContent = book.author;
        divPages.setAttribute("id", "pages");
        divPages.textContent = book.pages;
        divRead.setAttribute("id", "read");
        divRead.textContent = book.read;
        button.classList.add("remove");
        button.textContent = "Remove";
        button.setAttribute("id", book.index);
        button.addEventListener("click", (e)=> {
            // console.log(button.getAttribute("id"));
            
            myLibrary.splice( myLibrary.findIndex(a => a.index === book.index) , 1);
              
              
            refreshBookLibrary();
        });
    });
   
}

function deleteView(){
    let child = contents.lastElementChild;
    while(child){
        contents.removeChild(child);    
        child = contents.lastElementChild;
    }
    
}


const showButton = document.querySelector(".add");
const dialog = document.querySelector("#Dialog");

const dialogTitle = dialog.querySelector("#FormTitle");
const dialogAuthor = dialog.querySelector("#FormAuthor");
const dialogPages = dialog.querySelector("#FormPages");
const dialogRead = dialog.querySelector("#FormRead");
const selectEl = dialog.querySelector("select");

const confirmBtn = dialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  dialog.showModal();
});




// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  dialog.close();
  console.log(dialogAuthor.value);
  addBookToLibrary(dialogTitle.value, dialogAuthor.value, dialogPages.value,
                   dialogRead.value);
});