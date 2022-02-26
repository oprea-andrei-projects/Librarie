let myDoc = document.querySelector(".container");

function generateFirstPage(){

    let myarr=[];
    let arr1=[];
    let arr2=[];
    let arr3=[];

    myDoc.innerHTML = `
    
    <section class="titlu">

        <h1>Andrei's Bookstore</h1>

    </section>
    

    <section class="cautare">
        <legend>Serch for your book here : </legend>

        <fieldset>
        
    
            <div class="box">
                <label for="book">Book:</label>
                <select class="book">
                   

                </select>
            </div>


            <div class="box">
                <label for="publisher">Publisher:</label>
                <select class="publisher">
                    
                </select>
            </div>

            <div class="box">
                <label for="genre">Genre:</label>
                <select class="genre">
                    
                </select>
            </div>
    
           
    
        </fieldset>
    
        <input type="button" class="cauta" name="Cauta" id="btn-cautare" value="Cauta">

    </section>
    
    `

    populateWithBooks(data);
    populateWithPublisher(data);
    populateWithGenre(data);




  


    let bookField= document.querySelector(".book");

    bookField.addEventListener("change",(e)=>{

        let myValue =  bookField.value;
        
        arr1 = filterBookByTitle(data,myValue);


    });

    let pubField = document.querySelector(".publisher");

    pubField.addEventListener("change",(e)=>{

        let fieldValue = pubField.value;

        arr2 = filterBookByPublisher(data,fieldValue);


    });

    let genreField = document.querySelector(".genre");

    genreField.addEventListener("change", (e)=>{

        let genreValue = genreField.value;

        arr3 = filterBooksByGenre(data,genreValue);


    });

    myarr = intersectArr(arr1,intersectArr(arr2,arr3));

    let btn = document.querySelector(".cauta");
    btn.addEventListener("click", ()=>{

        setBookstore(data);

    });

}

function setBookstore(arr){

    myDoc.innerHTML=`
    
    <h1>Your Books<h1>
    <section class="books">


    </section>
    
    
    `

    populateBookstore(arr);

}

let populateBookstore = (arr)=>{

    let bookstore = document.querySelector(".books");

    let text =``;

    arr.forEach(element => {

        text+=`
        
        <div class="book">

            <p>Booktitle : ${element.title}</p>
            <p>Publisher : ${element.publisher}</p>
            <p>Book Genre : ${element.genre}</p>

        </div>
        
        
        `

    });

    bookstore.innerHTML = text;

}

let populateWithBooks = (booksArr)=>{

    let bookDoc = document.querySelector(".book");

    let text=``;

    booksArr.forEach(element => {

        text+=`
        
            <option>${element.title}<option>
        
        `
        
    });

    bookDoc.innerHTML = text;

}

let populateWithPublisher = (pArr)=>{

    let docPublish = document.querySelector(".publisher");

    let text=``;

    let unArray=[];

    pArr.forEach(e =>{

        if(unArray.includes(e.publisher)==false){


            text+=`
        
            <option>${e.publisher}</option>
        
        `
        }

        unArray.push(e.publisher);

        

    });


    docPublish.innerHTML = text;


}

let populateWithGenre = (genArr)=>{

    let genDoc = document.querySelector(".genre");

    let text=``;

    let altArr=[];

    genArr.forEach(e=>{

        if(altArr.includes(e.genre)==false){

            text+=`
        
            <option>${e.genre}</option>
        
            `

        }

        altArr.push(e.genre);

       

    });

    genDoc.innerHTML = text;

}

function filterBookByTitle(arr, title){

    let titleArr=[];

    arr.forEach(book=>{

        if(book.title == title){

            titleArr.push(book);
        }


    });

    return titleArr;

}

function filterBookByPublisher(arr, publisher){

    let publisherArr=[];

    arr.forEach(book =>{

        if(book.publisher == publisher){

            publisherArr.push(book);

        }


    });

    return publisherArr;

}

function filterBooksByGenre(arr, genre){

    let genreArr=[];

    arr.forEach(book =>{

        if(book.genre == genre){

            genreArr.push(book);
        } 
    });

    return genreArr;
}

function intersectArr(arr1, arr2){

    let arr3=[];

    arr1.forEach(e=>{

        if(arr2.includes(e)==true){

            arr3.push(e);
        }
    });

    return arr3;

}
