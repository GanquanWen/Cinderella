import React from "react"
import {
    Form, Icon, Input, Button, Checkbox,
} from 'antd';
import logoText from './design_elements/logo text - white.png'
import howItWorksImg from './design_elements/home - image 1.png'
// import learnMore from './home - image 2.png'

class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="sign-in">
                <Form onSubmit={this.handleSubmit} className="sign-in-form">
                    <h2 className="sign-in-with">Sign in with your</h2>
                    <div className="logo-text-container">
                        <img src={logoText} alt="" className="logo-text"/>
                    </div>
                    <h2 className="account">Account</h2>
                    <Form.Item>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: 'Please input your username!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email/Phone Number" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="sign-in-button">
                            Sign In
                        </Button><br/>
                        <div className="remember-forgot">
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false,
                            })(
                                <Checkbox className="remember-me">Remember me</Checkbox>
                            )}
                            <a className="sign-in-form-forgot" href="">Forgot password?</a>
                        </div>
                        <p className="sign-up-today">Don't have an account? Sign up today</p>
                        <Button type="primary" htmlType="submit" className="sign-up-button">
                            Sign Up
                        </Button>
                        <img src={howItWorksImg} alt="" className="how-it-works-img"/>
                        {/*<img src={learnMore} alt="" className="learn-more-img"/>*/}
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export const SignIn = Form.create({ name: 'normal_login' })(NormalLoginForm);



