import React from "react";
import {Menu} from "antd";




import {About} from "./about";
import {Experience} from "./experience";
import {Education} from "./education";
import {Projects} from "./projects";
import {Contact} from "./contact";

import './app.less';


class App extends React.Component {
    state = {
        tabSelected: "about"
    }

    changeTab = e => {
        if (e.key === "resume"){
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
                <h1>nimitpatel.me</h1>
                <Menu className="menu" mode="horizontal" selectedKeys={[this.state.tabSelected]} onClick={this.changeTab}>
                    <Menu.Item key="about">About</Menu.Item>
                    <Menu.Item key="education">Education</Menu.Item>
                    <Menu.Item key="projects">Projects</Menu.Item>
                    <Menu.Item key="experience">Experience</Menu.Item>
                    <Menu.Item key="resume">Resume</Menu.Item>
                    <Menu.Item key="contact">Contact</Menu.Item>
                </Menu>

                <div className="content">
                    {this.AppBody(this.state.tabSelected)}
                </div>
            </div>

        );
    }

}




export {App}
