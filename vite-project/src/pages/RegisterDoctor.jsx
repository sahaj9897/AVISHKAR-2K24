import React from 'react';
import { Form, Input, Button } from 'antd';
import '../styles/RegisterPatient.css';
import { Link } from 'react-router-dom';
import { Userschema } from '../server/validator';

const RegisterDoctor = () => {
  const onFinishHandler = async (values) => {
    try {
      await Userschema.parse(values);
      console.log('Form values:', values);
    } catch (error) {
      console.error('Validation error:', error.errors);
    }
  };

  return (
    <div className='FormContainer'>
      <Form layout="horizontal" onFinish={onFinishHandler}>
        <Form.Item label="Name" name="Name" rules={[{ required: true, message: 'Name is required' }]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Email" name="Email" rules={[{ type: 'email', message: 'Invalid email format' }, { required: true, message: 'Email is required' }]}>
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Password" name="Password" rules={[{ required: true, message: 'Password is required' }, { min: 8, message: 'Minimum 8 characters required' }]}>
          <Input type="password" />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>Register</Button>
        </Form.Item>
        <p>Already a user? <Link to="/login">Register here</Link></p>
      </Form>
    </div>
  );
};

export default RegisterDoctor;
