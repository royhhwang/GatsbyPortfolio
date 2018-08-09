import React, { Component } from 'react'
import { Fade, Flip, Reveal } from 'react-reveal'
import Artsy from '../media/artsy.jpg'
import Ring from '../media/ring.jpg'
import Corgi from '../media/corgi.jpg'
import Usagi from '../media/bunnyonly.png'
import Race from '../media/velocity.png'
import Wombat from '../media/wombatmain.png'
import '../css/work.css'

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    "name": "Artsy",
                    "image": Artsy,
                    "descript": "artsy image",
                    "link": "/artsy"
                },
                {
                    "name": "In the Dark",
                    "image": Ring,
                    "descript": "ring image",
                    "link": "/inthedark"
                },
                {
                    "name": "Corgi",
                    "image": Corgi,
                    "descript": "corgi image",
                    "link": "/corgi"
                },
                {
                    "name": "Usagi",
                    "image": Usagi,
                    "descript": "usagi image",
                    "link": "/usagi"
                },
                {
                    "name": "Race Painting",
                    "image": Race,
                    "descript": "race painting image",
                    "link": "/racepainting"
                },
                {
                    "name": "Wombat",
                    "image": Wombat,
                    "descript": "wombat image",
                    "link": "/wombat"
                }
            ]
        }
    }

    render() {

        const projectList = this.state.projects.map((work, index) => {
            return (
                <div className="project-blocks fade-box" key={index}>
                    <a href={work.link}>
                        <div className="project-image">
                            <Fade bottom>
                                <div className="img-filler">&nbsp;</div>
                                <h2 className="project-title">{work.name}</h2>
                            </Fade>
                        </div>
                        <img src={work.image} alt={work.descript} />
                        <Reveal effect="fade-start">
                            <div>
                                &nbsp;
                                &nbsp;
                            </div>
                        </Reveal>
                    </a>
                </div>
            )
        })

        return (
            <div>
                <Fade left>
                    <div className="work-layer" id="projects">
                        <h1>Projects</h1>
                    </div>
                </Fade>
                <Fade>
                    <div className="project-layer">
                        {projectList}
                    </div>
                </Fade >
            </div >
        )
    }
}

export default Work