import "./newproduct.css";

import React from 'react'

export default function NewProduct() {
    return (
        <div className="newProduct">
            <div className="newUserWrapper">
        <h1 className="newUserTitle">New Product</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Product name</label>
                    <input type="text" placeholder="Book" />
                </div>
                <div className="newUserItem">
                    <label>Price</label>
                    <input type="text" placeholder="$19.99" />
                </div>
                <div className="newUserItem">
                    <label>Description</label>
                    <input type="text" placeholder="This is a great book to read" />
                </div>
        <button className="newUserButton">Create</button>
            </form>
        </div>
           
        </div>
    )
}
