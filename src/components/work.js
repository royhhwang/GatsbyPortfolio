import React, { Component } from 'react'
import { Fade, Reveal } from 'react-reveal'
import KnobCreek from '../media/knobcreek.jpeg'
import Artsy from '../media/artsyjpg.jpg'
import Ring from '../media/ring.jpg'
import Corgi from '../media/corgijpg.jpg'
import Usagi from '../media/bunnyonly.png'
import Race from '../media/velocity.png'
import Wombat from '../media/wombatmain.png'
import '../scss/work.scss'

class Work extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    "name": "Knob Creek",
                    "image": KnobCreek,
                    "descript": "knobcreek bourbon logo",
                    "link": "/knobcreek",
                    "tech": "WordPress | Twig | Pantheon | Gulp"
                },
                {
                    "name": "Artsy",
                    "image": Artsy,
                    "descript": "artsy.com logo",
                    "link": "/artsy",
                    "tech": "React | Artsy API | Bootstrap | Sass"
                },
                {
                    "name": "In the Dark",
                    "image": Ring,
                    "descript": "spooky image of the ring",
                    "link": "/inthedark",
                    "tech": "React | A-Frame | 3ds Max | Parallax.js"
                },
                {
                    "name": "Corgi",
                    "image": Corgi,
                    "descript": "coding with corgis logo",
                    "link": "/corgi",
                    "tech": "React | Unity 3D"
                },
                {
                    "name": "Usagi",
                    "image": Usagi,
                    "descript": "usagi warrior game icon",
                    "link": "/usagi",
                    "tech": "Unity 3D | 3ds Max | C#"
                },
                {
                    "name": "Race Painting",
                    "image": Race,
                    "descript": "race painting icon",
                    "link": "/racepainting",
                    "tech": "Phaser | Socket.io | MERN Stack"
                },
                {
                    "name": "Project Wombat",
                    "image": Wombat,
                    "descript": "wombat tuxedo logo",
                    "link": "/wombat",
                    "tech": "MERN Stack | Sass | Gulp | AJAX"
                }
            ]
        }
    }

    render() {

        const projectList = this.state.projects.map((work, index) => {
            if (index < 12) {
                return (
                    <div className="project-blocks fade-box" key={index}>
                        <a className="work-link" href={work.link}>
                            <div className="project-title-container">
                                <Fade bottom>
                                    <h2 className="project-title">{work.name}</h2>
                                    <br />
                                    <p className="project-subtitle">{work.tech}</p>
                                </Fade>
                            </div>
                            <img className="project-thumbnail" src={work.image} alt={work.descript} />
                            <Reveal effect="fade-start"></Reveal>
                        </a>
                    </div>
                )
            }
            else { return }
        })

        return (
            <div className="wrapper project-wrapper" id="projects" >
                <Fade left>
                    <h1 className="section-header">Projects</h1>
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
