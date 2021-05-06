import React from 'react';
// import {Card} from "antd";

import './experience.less';
import {Card} from "antd";


class Experience extends React.Component {

    state = {
        experienceData: []
    }

    componentDidMount() {
        fetch("/.netlify/functions/experience").then(resp => resp.json()).then(
            data => {
                this.setState({
                    experienceData: data,
                });

            });
    }

    render() {
        var formattedData = this.state.experienceData.map(work => {
            return (
                <Card title={work.title} className="Card">
                    <p>{work.details}</p>
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



export {Experience}
