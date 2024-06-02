import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios'

function AddUser() {
    const [name, setName] = useState(null);
    const [address, setAddress] = useState(null);
    const [nameError, setNameError] = useState(null);
    const [addressError, setAddressError] = useState(null);
    
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset error messages
        setNameError("")
        setAddressError("")

        let hasError = false

        if(!name){
            setNameError("Name is required")
            hasError = true
        }

        if(!address){
            setAddressError("Address is required")
            hasError = true
        }
        // If there are errors then don't submit the form
        if(hasError){
            return
        }

        const formData = {
            name,
            address
        }
        Axios.post('http://localhost:3000/api/createuser', formData)
        .then(res => {
            console.log('Form Data submitted successfully', res.data);
        })
        .catch(err => {
            console.log('Error submitting form:', err)
        })
    }


    const styles = {
        container:{
            maxWidth: "600px",
            margin: "0 auto",
            padding: "20px",
            // alignItems: "center",
            // display: "flex",
            borderRadius: "10px",
            // justifyContent: "center",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            position: "relative"
        },
        form: {
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            // maxWidth: "50vw",
            margin: "100px 20px",
            // borderRadius: "100px",
            // backgroundColor: ""
        },
        error: {
            color: "red",
            fontSize: "12px"
        }
    }
  return (
    <div style={styles.container}>
        <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        <h2>Add User</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
            <label >
                Name:
                <input type="text" value={name} onChange={e=> setName(e.target.value)} />
                {nameError && <span style={styles.error}>{nameError}</span>}
            </label>
            <label>
                Address:
                <textarea rows={4} type="text" value={address} onChange={e=>setAddress(e.target.value)} />
                {addressError && <span style={styles.error}>{addressError}</span>}
            </label>
            <button type='submit'> Submit</button>
        </form>
    </div>
  )
}

export default AddUser