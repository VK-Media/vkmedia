import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    render() {
        return (
            <a className="Project" href={this.props.data.url} target="_blank" rel="noopener noreferrer">
                <img src={this.props.data.image} alt={this.props.data.name} />

                <div><div>Se projekt</div></div>
            </a>
        );
    }
}

export default Project;
