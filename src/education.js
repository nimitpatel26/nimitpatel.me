import React from 'react';
import {Card} from "antd";

import './education.less';
class Education extends React.Component {
    state = {
        schoolData: []
    }

    componentDidMount() {
        fetch("/.netlify/functions/education").then(resp => resp.json()).then(
            data => {
                this.setState({
                    schoolData: data,
                });

            });
    }

    render(){
        let formattedData = this.state.schoolData.map(school => {
            let formattedDetails = school.description.map(detail => {
                return (
                  <p key={detail} >{detail}</p>
                );
            })
            return (
                <Card key={school.name} title={school.name} className="Card">
                    {formattedDetails}
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
export {Education}
