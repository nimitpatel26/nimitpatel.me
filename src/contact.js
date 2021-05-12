import React from 'react';
import {Form, Input, Button} from "antd";
import 'antd/dist/antd.less';
import './contact.less';


// const validateMessages = {
//     required: '${label} is required!',
//     types: {
//         email: '${label} is not a valid email!',
//         number: '${label} is not a valid number!',
//     },
//     number: {
//         range: '${label} must be between ${min} and ${max}',
//     },
// };

class Contact extends React.Component {
    state = {
        messageStatus: "NOT_SENT",
    }

    // formRef = React.createRef();

    constructor() {
        super();
        this.wrapper = React.createRef();
    }



    onFinish = async (values) => {
        console.log("got data in contact.js");
        console.log(values);
        const response = await fetch("/.netlify/functions/email", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(values) // body data type must match "Content-Type" header
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

    MessageForm = function (finishFunc) {
        return (
            <Form ref={this.wrapper} name="control-ref" onFinish={finishFunc} layout="horizontal"
                  labelCol={{span: 2}} wrapperCol={{span: 14}}
                // form={form}
                // onValuesChange={onFormLayoutChange}
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
                <Form.Item wrapperCol={{span: 14, offset: 2}}>
                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>);
    }

    Sent = function (){
        return (<h1>Message Sent Successfully!</h1>);
    }

    Failed = function (){
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
