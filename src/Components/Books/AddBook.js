import React, { useState } from 'react'

export const AddBook = ({ loader, addBook }) => {
    const [name, setName] = useState("")
    const [author, setAuthor] = useState("")
    const btnStyle = {
        marginLeft: "5px"
    }

    const textAreaStyle = {
        resize: "none"
    }

    const submit = (e) => {
        e.preventDefault()
        if (!name || !author) {
            const uiString = `
                                <div class="alert alert-danger alert-dismissible fade show" id="alert" role="alert">
                                    You should fill the <strong>author and name</strong> input field!
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`;
            document.getElementById("container-div-add-element").innerHTML = uiString + document.getElementById("container-div-add-element").innerHTML;

            setTimeout(() => {
                document.getElementById("alert").style.display = "none";
            }, 2500);
        }   else {
            addBook(name, author)
        }

        setName("")
        setAuthor("")
    }


    return (
        <div className="container" id="container-div-add-element">
            <h1 className="text-center">Add Books</h1>
            <form onSubmit={submit}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" id="inputEmail3" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="author" className="col-sm-2 col-form-label">Author</label>
                    <div className="col-sm-10">
                        <input type="text" name="author" id="author" cols="30" rows="10" className="form-control" style={textAreaStyle} value={author} onChange={(e) => setAuthor(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className="btn btn-outline-success btn-sm" onClick={loader}>Add Book</button>
                <button type="reset" style={btnStyle} onClick={loader} className="btn btn-outline-secondary btn-sm">Reset</button>
            </form>
            <hr />
        </div>
    )
}
