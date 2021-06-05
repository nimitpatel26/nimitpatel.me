import React from 'react';

import config from '../config';
import './about.less';

class About extends React.Component{
    state = {
        aboutTitle: "",
        aboutDetails: ""
    }

    componentDidMount() {
        fetch(config.api.about).then(resp => resp.json()).then(
            data => {

                let details = data.details.map(detail => <p>{detail}</p>)
                this.setState({
                    aboutTitle: data.title,
                    aboutDetails: details
                });

            });
    }

    render(){
        return (
            <>
                {/*<h1>{this.state.aboutTitle}</h1>*/}
                <p>{this.state.aboutDetails}</p>
            </>
        );
    }

}



export {About}
