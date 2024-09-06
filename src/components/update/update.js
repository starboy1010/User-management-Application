import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';
export default function Update() {
    let navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [ID, setID] = useState(null);
    const sendDataToAPI = () => {
        axios.put(`https://66da1b734ad2f6b8ed57008c.mockapi.io/crud/${ID}`, {
            firstName,
            lastName,
            email
        }).then(() => {
            navigate('/read')
        })
    }

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setLastName(localStorage.getItem('lastName'));
        setEmail(localStorage.getItem('email'));
        setID(localStorage.getItem('ID'))
    }, [])

    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name="lname"
                        value={lastName}
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Email Address</label>
                    <input
                        name="email"
                        value={email}
                        placeholder='abc@gmail.com'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Update</Button>
            </Form>
        </div>
    )
}