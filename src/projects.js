import React from 'react';
// import {Card} from "antd";

import './projects.less';
import {Card} from "antd";

class Projects extends React.Component {

    state = {
        projectData: []
    }

    componentDidMount() {
        fetch("/.netlify/functions/projects").then(resp => resp.json()).then(
            data => {
                this.setState({
                    projectData: data,
                });

            });
    }

    render() {
        var formattedData = this.state.projectData.map(project => {
            return (
                <Card title={project.title} className="Card">
                    <p>{project.description}</p>
                    <p>{project.source}</p>
                    <p>{project.demo}</p>
                </Card>
            )
        })

        return (
            <div>
                {formattedData}
            </div>
        );
    }
}


export {Projects}
