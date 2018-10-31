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
                    "name": "Barrel Dev Test",
                    "image": KnobCreek,
                    "descript": "knobcreek bourbon logo",
                    "link": "/knobcreek",
                    "tech": "WordPress | Twig | Pantheon | Gulp"
                },
                {
                    "name": "Artsy",
                    "image": Artsy,
                    "descript": "artsy image",
                    "link": "/artsy",
                    "tech": "React.js | Artsy | Bootstrap | Sass"
                },
                {
                    "name": "In the Dark",
                    "image": Ring,
                    "descript": "ring image",
                    "link": "/inthedark",
                    "tech": "React.js | AFrame | Parallax"
                },
                {
                    "name": "Corgi",
                    "image": Corgi,
                    "descript": "corgi image",
                    "link": "/corgi",
                    "tech": "React.js | Unity 3D"
                },
                {
                    "name": "Usagi",
                    "image": Usagi,
                    "descript": "usagi image",
                    "link": "/usagi",
                    "tech": "Unity 3D"
                },
                {
                    "name": "Race Painting",
                    "image": Race,
                    "descript": "race painting image",
                    "link": "/racepainting",
                    "tech": "Phaser | Socket"
                },
                {
                    "name": "Wombat",
                    "image": Wombat,
                    "descript": "wombat image",
                    "link": "/wombat",
                    "tech": "MERN | Sass | Gulp | AJAX"
                }
            ]
        }
    }

    render() {

        const projectList = this.state.projects.map((work, index) => {
            if (index < 6) {
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
            else if (index >= 6) {
                return (
                    <div className="project-blocks" key={index}>
                        <a href={work.link}>
                            <div className="project-additional">
                                <Fade bottom>
                                    <h2 className="project-title -add-title">{work.name}</h2>
                                    <img className="project-thumbnail -add-image" src={work.image} alt={work.descript} />
                                    <br />
                                    <p className="project-subtitle -add-subtitle">{work.tech}</p>
                                </Fade>
                            </div>
                        </a>
                    </div>
                )
            }
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
