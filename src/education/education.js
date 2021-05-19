import React from 'react';
import {Card} from "antd";

import config from '../config';
import './education.less';


class Education extends React.Component {
    state = {
        schoolData: []
    }

    componentDidMount() {
        fetch(config.api.education).then(resp => resp.json()).then(
            data => {
                this.setState({
                    schoolData: data,
                });

            });
    }

    getFormattedData() {
        return this.state.schoolData.map(school => {
            let formattedDetails = school.description.map(detail => {
                return (
                    <li key={detail} >{detail}</li>
                );
            })
            return (
                <Card key={school.name} title={school.name} className="Card">
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
export {Education}
