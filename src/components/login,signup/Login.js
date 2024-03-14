import React from "react";
import {UserOutlined, LockOutlined, GoogleCircleFilled, FacebookFilled, InstagramOutlined, TwitterCircleFilled } from '@ant-design/icons'
import {Form, Input, Button, Checkbox, Space} from "antd";
import UserPng from './user.png';

function Login(){

    const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return(
        <div className="grid place-items-center border border-blue-500">
            <div className="flex">
                <p className="my-4 text-red-500 text-md">New User?</p> 
                <a href='#' className="my-4 text-green-500 text-md">SignUp</a>
            </div>
            
            <div className="w-3/4 lg:w-1/3 px-20 py-5 mb-4 shadow-md shadow-red-500">
                <div className="grid place-items-center my-2 lg:my-3 text-red-500 text-2xl font-bold">
                    Welcome
                    <img src={UserPng} alt='user-logo' className="w-10 aspect-square mt-3"/>
                </div>
                
                <Form 
                    name="Login" 
                    initialValues={{ remember: true,}} 
                    onFinish={onFinish} 
                    onFinishFailed={onFinishFailed} 
                    autoComplete="off"
                >
                    <Form.Item 
                        name="username" 
                        rules={[{required: true, message: 'Please input your username!'}]}>
                        <Input 
                            prefix={<UserOutlined className="site-form-item-icon" />} 
                            placeholder="Username" />
                    </Form.Item>

                    <Form.Item 
                        name="password" 
                        rules={[{required: true, message: 'Please input your password!'}]}>
                            <Input 
                                prefix={<LockOutlined className="site-form-item-icon" />} 
                                type="password" 
                                placeholder="Password"/>
                    </Form.Item>

                    <Form.Item 
                        name="remember" 
                        valuePropName="checked" 
                    >
                            <Checkbox>Remember me</Checkbox>
                            <a href='#'>| Forget password?</a>
                    </Form.Item>
                   

                    <Form.Item>
                            <Button htmlType="submit" className=" text-white hover:text-red-500 bg-red-500 border-none shadow-lg">Log In</Button>
                    </Form.Item>
                </Form>

                <div className='grid place-items-center'>
                    <p className="text-green-500">Or, Signup using</p>
                    <div className=" flex text-3xl">
                        <GoogleCircleFilled className="text-orange-500 mr-4"/>
                        <FacebookFilled className="text-blue-600 mr-4"/>
                        <InstagramOutlined className="text-orange-500 mr-4"/>
                        <TwitterCircleFilled className="text-blue-800"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;