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
        let formattedData = this.state.projectData.map(project => {

            let formattedDes = project.description.map(des => <p key={des}>{des}</p>);

            return (
                <Card key={project.title} title={project.title} className="Card">
                    <p>{formattedDes}</p>
                    <p>{project.source}</p>
                    <p>{project.demo}</p>
                </Card>
            )
        })

        return (
            <>
                {formattedData}
            </>
        );
    }
}


export {Projects}
