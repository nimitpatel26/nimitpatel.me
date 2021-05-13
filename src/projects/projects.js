import React from 'react';
import {Card, Tag} from "antd";


import config from '../config';
import './projects.less';

class Projects extends React.Component {

    state = {
        projectData: [],
        selectedTags: [],
        tagsData: [],
    }


    componentDidMount() {
        fetch(config.api.projects).then(resp => resp.json()).then(
            data => {
                let tags = new Set();
                for (let proj of data) {
                    for (let tag of proj.tags) {
                        tags.add(tag);
                    }
                }

                this.setState({
                    projectData: data,
                    selectedTags: Array.from(tags),
                    tagsData: Array.from(tags),
                });


            });
    }


    handleChange(tag, checked) {
        const {selectedTags} = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        this.setState({selectedTags: nextSelectedTags});
    }


    isCardVisible(id) {
        for (let tag of this.state.projectData[id].tags) {
            if (this.state.selectedTags.includes(tag)) {
                return "inherit";
            }
        }
        return "none";
    }


    getFormattedData(){
        let index = -1;
        return this.state.projectData.map(project => {
            let formattedDes = project.description.map(des => <p key={des}>{des}</p>);
            let formattedTags = project.tags.map(tag => <Tag key={tag}>{tag}</Tag>);
            index += 1;

            return (
                <Card key={index} title={project.title} className="Card" style={{display: this.isCardVisible(index)}}
                      extra={<a href={project.source} target="_blank">Source</a>}>
                    <p>{formattedDes}</p>

                    {formattedTags}
                </Card>
            )
        })
    }



    render() {

        return (
            <>
                <div className="TagBar">
                    <span style={{marginRight: 8}}>Tags:</span>
                    {this.state.tagsData.map(tag => (
                        <Tag.CheckableTag
                            key={tag}
                            checked={this.state.selectedTags.indexOf(tag) > -1}
                            onChange={checked => this.handleChange(tag, checked)}
                        >
                            {tag}
                        </Tag.CheckableTag>
                    ))}
                </div>

                {this.getFormattedData()}
            </>
        );
    }
}


export {Projects}
