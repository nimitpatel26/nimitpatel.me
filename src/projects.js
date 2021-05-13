import React from 'react';
// import {Card} from "antd";

import './projects.less';
import {Card, Tag} from "antd";


const {CheckableTag} = Tag;


class Projects extends React.Component {

    state = {
        projectData: [],
        selectedTags: [],
        tagsData: [],
    }

    handleChange(tag, checked) {
        const {selectedTags} = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        this.setState({selectedTags: nextSelectedTags});
    }


    componentDidMount() {
        fetch("/.netlify/functions/projects").then(resp => resp.json()).then(
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

    isCardVisible = id => {
        for (let tag of this.state.projectData[id].tags) {
            if (this.state.selectedTags.includes(tag)) {
                return "inherit";
            }
        }
        return "none";
    }


    render() {

        let index = -1;
        let formattedData = this.state.projectData.map(project => {

            let formattedDes = project.description.map(des => <p key={des}>{des}</p>);
            let formattedTags = project.tags.map(tag => <Tag key={tag}>{tag}</Tag>)
            index += 1;
            return (
                <Card key={index} title={project.title} className="Card" style={{display: this.isCardVisible(index)}}
                      extra={<a href={project.source} target="_blank">Source</a>}>
                    <p>{formattedDes}</p>
                    {/*<p><a href={project.demo} target="_blank">Demo</a></p>*/}
                    {/*<p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">Demo</a></p>*/}

                    {/*<Tag color="magenta" >Tag 1</Tag>*/}
                    {/*<Tag color="red">Tag 2</Tag>*/}
                    {/*<Tag color="volcano" style={{display: this.state.selectedTags.includes("Books") ? "none" : "inline"}}>Tag 3</Tag>*/}
                    {formattedTags}
                </Card>
            )
        })


        return (
            <>
                <div className="TagBar">
                    <span style={{marginRight: 8}}>Tags:</span>
                    {this.state.tagsData.map(tag => (
                        <CheckableTag
                            key={tag}
                            checked={this.state.selectedTags.indexOf(tag) > -1}
                            onChange={checked => this.handleChange(tag, checked)}
                        >
                            {tag}
                        </CheckableTag>
                    ))}
                </div>

                {formattedData}
            </>
        );
    }
}


export {Projects}
