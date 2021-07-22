import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Book } from "../Components/Books/Book";
import { AddBook } from "../Components/Books/AddBook";

const Books = ({ loader }) => {
    let initBook;
    if (localStorage.getItem("books") === null) {
        initBook = [];
    }   else {
        initBook = JSON.parse(localStorage.getItem("books"))
    }

    const style = {
        background: "#DDDDDD",
        padding: "10px 0"
    }

    const addBook = (name, author) => {
        let sno;
        if (books.length === 0) {
            sno = 1;
            console.log(sno)
        }   else {
            sno = books[books.length -1].sno + 1
            console.log(sno)
        }

        const obj = {
            sno: sno,
            name: name,
            author: author
        }

        setBooks([...books, obj])
    }

    const deleteBook = (book) => {
        const finalBooks = books.filter((e) => {
            return e !== book;
        })

        setBooks(finalBooks)
        localStorage.setItem("books", JSON.stringify(books))
    }
    const [books, setBooks] = useState(initBook);
    React.useEffect(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, [books])

    return (
        <section id="books" style={style}>
            <Helmet>
                <title>Your Books - ProgrammingWithAAO.com</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
            </Helmet>
            <AddBook loader={loader} book={books} addBook={addBook} />
            <Book loader={loader} book={books} deleteBook={deleteBook} />
        </section>
    )
}

export default Books
