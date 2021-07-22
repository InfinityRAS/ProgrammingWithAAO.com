import React from 'react';
import { BookItem } from "./BookItem";

export const Book = (props) => {
    return (
        <div className="container">
            <h1 className="text-center">Your Books</h1>
            {
                props.book.length === 0 ? <h3 >No books to display, click on "Add Book" button to add a book</h3> :
                    props.book.map((book) => {
                        return <BookItem book={book} key={book.sno} deleteBook={props.deleteBook} />
                    })
            }
        </div>
    )
}
