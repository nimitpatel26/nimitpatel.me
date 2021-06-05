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
            // let startDate = new Date(work.from);
            // let toDate = new Date(work.to);
            // let startStr = startDate.toLocaleString('default', { month: 'long' }) + ", " + startDate.getFullYear();
            // let toStr = toDate.toLocaleString('default', { month: 'long' }) + ", " + toDate.getFullYear();


            return (
                <Card key={work.title} title={work.title + " @ " + work.company} className="Card">
                    <p>{work.from} to {work.to}</p>
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
