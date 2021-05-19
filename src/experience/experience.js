import React from 'react';
import {Card} from "antd";

import config from '../config';
import './experience.less';


class Experience extends React.Component {

    state = {
        experienceData: []
    }

    componentDidMount() {
        fetch(config.api.experience).then(resp => resp.json()).then(
            data => {
                this.setState({
                    experienceData: data,
                });

            });
    }

    getFormattedData() {
        return this.state.experienceData.map(work => {

            let formattedDetails = work.details.map(detail => <li key={detail}>{detail}</li>);

            return (
                <Card key={work.title} title={work.title} className="Card">
                    <p>{work.company}</p>
                    <p>{work.from}-{work.to}</p>
                    <ul>{formattedDetails}</ul>
                </Card>
            )
        })
    }

    render() {

        return (
            <div className="cardsContainer">

                {this.getFormattedData()}
            </div>
        );
    }
}



export {Experience}
