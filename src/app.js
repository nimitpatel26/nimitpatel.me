import React from "react";
import {Menu} from "antd";

import {About} from "./about/about";
import {Experience} from "./experience/experience";
import {Education} from "./education/education";
import {Projects} from "./projects/projects";
import {Contact} from "./contact/contact";
import './app.less';
import config from "./config";


class App extends React.Component {
    state = {
        tabSelected: "about"
    }

    changeTab = e => {

        if (e.key === "resume"){
            fetch(config.api.resume).then(resp => resp.blob()).then(blob => {
                let url = window.URL.createObjectURL(blob);
                let a = document.createElement('a');
                a.href = url;
                a.download = "Nimit_Patel_Resume.pdf";
                document.body.appendChild(a);
                a.click();
                a.remove();
            });
            return;
        }

        this.setState({
            tabSelected: e.key
        })
    }

    AppBody(tabSelected){

        if (tabSelected === "experience"){
            return <Experience/>
        }
        if (tabSelected === "education"){
            return <Education/>
        }
        if (tabSelected === "projects"){
            return <Projects/>
        }
        if (tabSelected === "contact"){
            return <Contact/>
        }
        return <About/>

    }


    render(){

        return (
            <div className="app">
                <div className="header">
                    <h1>nimitpatel.me</h1>
                </div>
                <div className="menu">
                    <Menu className="menu" mode="horizontal" selectedKeys={[this.state.tabSelected]} onClick={this.changeTab}>
                        <Menu.Item key="about">About</Menu.Item>
                        <Menu.Item key="education">Education</Menu.Item>
                        <Menu.Item key="projects">Projects</Menu.Item>
                        <Menu.Item key="experience">Experience</Menu.Item>
                        <Menu.Item key="resume">Resume</Menu.Item>
                        <Menu.Item key="contact">Contact</Menu.Item>
                    </Menu>
                </div>

                <div className="content">
                    {this.AppBody(this.state.tabSelected)}
                </div>
            </div>

        );
    }

}




export {App}
