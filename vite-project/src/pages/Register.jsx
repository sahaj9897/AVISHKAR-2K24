import React from 'react';
import { Form, Input, Button,message} from 'antd';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios'
const Register = () => {

  const navigate=useNavigate()
  const onFinishHandler = async (values) => {
    try {
      const res=await axios.post('/api/v1/user/register',values)
      if(res.data.success){
        message.success("Register Succesfully!")
        navigate('/login')
      }
      else{
        message.error(res.data.message)
      }
    }
   catch (error) {
      message.error("Something Went Wrong")
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

export default Register;
