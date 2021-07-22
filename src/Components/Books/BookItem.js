import React from 'react'

export const BookItem = ({ book, deleteBook }) => {
    return (
        <>
            <h2>Book No. : {book.sno}</h2>
            <h3>Name: {book.name}</h3>
            <h4>Author: {book.author}</h4>
            <button className="btn btn-sm btn-outline-danger deleteBtn" onClick={() => deleteBook(book)}>Read this Book? Click here to delete</button>
            <hr />  

        </>
    )
}
