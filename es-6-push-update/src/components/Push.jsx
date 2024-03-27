import React from 'react'
import { useState } from 'react'

export const Push = () => {
    const [formDate, setFormData] = useState({
        name: '',
        email: ''
    });
    const [store, setStore] = useState([]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setFormData(
            { ...formDate, [name]: value } // update
        )
    }

    const handleOnClick = (e) => {
        e.preventDefault();
        console.log(formDate);
        const newData = {
            name: formDate.name,
            email: formDate.email
        }
        setStore(
            [...store, newData] // push
        )
    }

    console.log(store);

    return (
        <>
            <form>
                <input type="text" name='name' value={formDate.name} onChange={(e) => handleOnChange(e)} placeholder='name' /> <br />
                <input type="email" name='email' value={formDate.email} onChange={(e) => handleOnChange(e)} placeholder='email ' /> <br />
                <button onClick={(e) => handleOnClick(e)}>Add Data</button>
            </form>
        </>
    )
}