import React from 'react';
import {Form, Input, Button} from "antd";
import {CheckCircleTwoTone, CloseCircleTwoTone} from '@ant-design/icons';
import 'antd/dist/antd.less';

import config from '../config';
import './contact.less';


class Contact extends React.Component {
    state = {
        messageStatus: "NOT_SENT",
        submitted: false,
    }

    // formRef = React.createRef();

    constructor(props) {
        super(props);
        this.wrapper = React.createRef();
    }


    onFinish = async (values) => {

        this.setState({
            submitted: true,
        })

        const response = await fetch(config.api.email, {
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
            });
            return;
        }

        this.setState({
            messageStatus: "FAILED",
        });

    };

    MessageForm = function (finishFunc, formSubmitted) {
        return (
            <Form ref={this.wrapper} name="control-ref" onFinish={finishFunc} layout="horizontal" className="form"
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
                    <Button type="primary" htmlType="submit" loading={formSubmitted}>Submit</Button>
                </Form.Item>
            </Form>);
    }

    Sent = function () {
        return (
            <div className="statusBox">
                <CheckCircleTwoTone className="statusIcon" twoToneColor="#52c41a"/>
                <h2 className="statusHeading">Message Sent Successfully!</h2>
            </div>

        );
    }

    Failed = function () {
        return (
            <div className="statusBox">
                <CloseCircleTwoTone className="statusIcon" twoToneColor="#FF0000" style={{fontSize:"1.5rem"}}/>
                <h2 className="statusHeading">Failed To Send The Message!</h2>
            </div>
        );
    }

    render() {
        if (this.state.messageStatus === "NOT_SENT") {
            return this.MessageForm(this.onFinish, this.state.submitted);
        } else if (this.state.messageStatus === "SENT") {
            return <this.Sent/>
        } else {
            return <this.Failed/>
        }
    }


}


export {Contact}
