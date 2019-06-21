import React, { Component } from 'react';

import './Projects.css';
import cssImage from '../../images/projects/css.jpg';
import julieImage from '../../images/projects/julie-pt.jpg';

import Project from './Project/Project';

class Projects extends Component {
    renderProjects = () => {
        const projects = [
            {
                name: 'CSS Utility Tool',
                image: cssImage,
                url: 'https://css.vkmedia.dk'
            },
            {
                name: 'Julie Personlig Træner hjemmeside',
                image: julieImage,
                url: 'https://julie-pt.dk'
            }
        ];

        return projects.map(project => {
            return <Project key={project.name} data={project} />
        });
    }

    render() {
        return (
            <div className="Projects">
                { this.renderProjects() }
            </div>
        );
    }
}

export default Projects;
