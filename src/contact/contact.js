import React from 'react';
import {Form, Input, Button} from "antd";

import config from '../config';
import './contact.less';


class Contact extends React.Component {
    state = {
        messageStatus: "NOT_SENT",
    }

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }

    async onFinish(values) {
        const response = await fetch(config.api.email, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
        });

        if (response.status === 200) {

            this.setState({
                messageStatus: "SENT",
            })
            return;
        }

        this.setState({
            messageStatus: "FAILED",
        })

    };

    MessageForm(finishFunc) {
        return (
            <Form ref={this.wrapper} name="control-ref" onFinish={finishFunc} layout="horizontal" className="Form"
                  labelCol={{span: 2}} wrapperCol={{span: 14}}
            >
                <Form.Item label="Name" name="Name" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Email" name="Email" rules={[{required: true}]}>
                    <Input type="email"/>
                </Form.Item>
                <Form.Item label="Subject" name="Subject" rules={[{required: true}]}>
                    <Input/>
                </Form.Item>
                <Form.Item label="Details" name="Details" rules={[{required: true}]}>
                    <Input.TextArea autoSize={{minRows: 3, maxRows: 12}}/>
                </Form.Item>
                <Form.Item wrapperCol={{span: 1, offset: 2}}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>);
    }

    Sent() {
        return (<h1>Message Sent Successfully!</h1>);
    }

    Failed() {
        return (<h1>Failed to Send Message!</h1>);
    }

    render() {
        if (this.state.messageStatus === "NOT_SENT"){
            return this.MessageForm(this.onFinish);
        }else if (this.state.messageStatus === "SENT"){
            return this.Sent();
        }else{
            return  this.Failed();
        }
    }


}


export {Contact}
