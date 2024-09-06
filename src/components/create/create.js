import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Create() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const sendDataToAPI = () => {
    axios.post(`https://66da1b734ad2f6b8ed57008c.mockapi.io/crud`, {
      firstName,
      lastName,
      email
    }).then(() => {
      navigate('/read')
    })
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <label id='head'>First Name</label>
          <input name="fname" 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label id='head'>Last Name</label>
          <input 
          name="lname" 
          placeholder='Last Name' 
          onChange={(e) => setLastName(e.target.value)} 
          />
        </Form.Field>
        <Form.Field>
          <label id='head'>Email Address</label>
          <input 
          name="email" 
          placeholder='abc@gmail.com' 
          onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  )
}