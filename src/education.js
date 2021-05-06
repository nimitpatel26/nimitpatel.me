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
        var formattedData = this.state.schoolData.map(school => {
            var formattedDetails = school.description.map(detail => {
                return (
                  <p>{detail}</p>
                );
            })
            return (
                <Card title={school.name} className="Card">
                    {formattedDetails}
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
export {Education}
