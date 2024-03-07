import React from 'react'
import {Form,Input} from 'antd';
import '../styles/RegisterDoctor.css';
import { Link } from 'react-router-dom';

const  RegisterDoctor = () => {
  function onFinishHandler(values){
    console.log(values)
  }
  return (
    <div className='FormContainer'>
      <Form layout="horizontal" onFinish={onFinishHandler}>
      <Form.Item label="Name">
          <Input type="text" required></Input>
        </Form.Item>
        <Form.Item label="Email">
          <Input type="text" required></Input>
        </Form.Item>
        <Form.Item label="Password">
          <Input type="password" required></Input>
        </Form.Item>
        <button type='submit'>Register</button>
        <p>Already a user?</p>
        <Link to="/login">Login here</Link>
      </Form>
    </div>
  )
}

export default RegisterDoctor
