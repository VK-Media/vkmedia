import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
    render() {
        return (
            <div className="Project">
                <a href={this.props.data.url} target="_blank" rel="noopener noreferrer">
                    <img src={this.props.data.image} alt={this.props.data.name} />
                </a>
            </div>
        );
    }
}

export default Project;
