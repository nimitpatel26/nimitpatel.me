import React from 'react';
import {Card, Tag} from "antd";
import {GithubOutlined, RocketOutlined, PlayCircleOutlined} from '@ant-design/icons';
import 'antd/dist/antd.less';

import config from '../config';
import './projects.less';

class Projects extends React.Component {

    state = {
        projectData: [],
        visProjInd: [],
        selectedTags: [],
        tagsData: [],
    }


    componentDidMount() {
        fetch(config.api.projects).then(resp => resp.json()).then(data =>
            {
                let tags = new Set();
                for (let proj of data) {
                    for (let tag of proj.tags) {
                        tags.add(tag);
                    }
                    proj.tags.sort();
                }

                data = data.sort((p1, p2) => {
                    let d1 = new Date(p1.date);
                    let d2 = new Date(p2.date);
                    return d1 < d2;
                })

                this.setState({
                    projectData: data,
                    tagsData: Array.from(tags).sort(),
                });

                this.setVisProj([]);


            });
    }


    handleChange(tag, checked) {
        const {selectedTags} = this.state;
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        this.setState({selectedTags: nextSelectedTags})


        this.setVisProj(nextSelectedTags);

    }

    setVisProj(selectedTags){
        let visInd = []
        for(let i = 0; i < this.state.projectData.length; i++) {
            let present = false;
            for (let tag of selectedTags) {
                if (this.state.projectData[i].tags.includes(tag)) {
                    present = true;
                    break;
                }
            }
            if (present || selectedTags.length === 0) {
                visInd.push(i);
            }


        }

        this.setState({visProjInd: visInd});
    }


    getFormattedData(){

        let dataToShow = [];

        for (let i = 0; i < this.state.projectData.length; i++){
            if (!this.state.visProjInd.includes(i)){
                continue;
            }
            let project = this.state.projectData[i];

            let formattedDes = project.description.map(des => <li key={des}>{des}</li>);
            let formattedTags = project.tags.map(tag => <Tag key={tag}>{tag}</Tag>);

            let gitHubLink = null;
            let projectLiveLink = null;
            let demoLink = null;

            if (project.source){
                gitHubLink = <a href={project.source} target="_blank"><GithubOutlined className="linkButton"/></a>;
            }

            if (project.live){
                projectLiveLink = <a href={project.live} target="_blank"><RocketOutlined className="linkButton"/></a>;
            }

            if (project.demo){
                demoLink = <a href={project.demo} target="_blank"><PlayCircleOutlined className="linkButton"/></a>;
            }

            dataToShow.push (
                <div className="Card" >
                    <Card key={i} title={project.title}
                          extra={
                              <div>
                                  {gitHubLink}
                                  {projectLiveLink}
                                  {demoLink}
                              </div>
                          }>
                        <ul>{formattedDes}</ul>

                        {formattedTags}
                    </Card>
                </div>

            );

        }


        return (
            <div className="cardsContainer">
                {dataToShow}
            </div>

        );


    }



    render() {

        return (
            <>
                <div className="tagBar">
                    <span style={{marginRight: 8}}><b>Filter:</b></span>
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
