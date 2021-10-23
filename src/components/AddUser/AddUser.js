import React, { useRef } from 'react';

const AddUser = () => {
    const nameRef = useRef();
    const emailRef = useRef();

    const handleAddUser = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        // console.log(name, email);
        const newUser = {name, email};

        fetch('http://localhost:5000/users', {
            method:"post",
            headers: {
                "content-type":"application/json",
            },
            body: JSON.stringify(newUser),
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                alert('successfully added the user');
                e.target.reset();
            }
        })
        e.preventDefault();
    }

    return (
        <div>
            <h2>Please add an user</h2>
            <form onSubmit={handleAddUser}>
                <input ref={nameRef} type="text" placeholder="Name" /><br />
                <input ref={emailRef} type="email" name="email" id="" placeholder="Email" /><br />
                <input type="submit" value="Add" />
            </form>
        </div>
    );
};

export default AddUser;