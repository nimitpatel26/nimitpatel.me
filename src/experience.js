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

        let formattedData = this.state.experienceData.map(work => {

            let formattedDetails = work.details.map(detail => <p>{detail}</p>);

            return (
                <Card title={work.title} className="Card">
                    <p>{work.company}</p>
                    <p>{work.from}-{work.to}</p>
                    <p>{formattedDetails}</p>
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
