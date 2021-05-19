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

            let formattedDetails = work.details.map(detail => <p key={detail}>{detail}</p>);

            return (
                <Card key={work.title} title={work.title} className="Card">
                    <p>{work.company}</p>
                    <p>{work.from}-{work.to}</p>
                    <p>{formattedDetails}</p>
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
