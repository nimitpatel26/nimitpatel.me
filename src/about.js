import React from 'react';
// import {Card} from "antd";

import './about.less';

class About extends React.Component{
    state = {
        aboutTitle: "",
        aboutDetails: ""
    }

    componentDidMount() {
        fetch("/.netlify/functions/about").then(resp => resp.json()).then(
            data => {
                this.setState({
                    aboutTitle: data.title,
                    aboutDetails: data.details
                });

            });
    }

    render(){
        return (
            <>
                <h1>{this.state.aboutTitle}</h1>
                <p>{this.state.aboutDetails}</p>
            </>
        );
    }

}



export {About}
