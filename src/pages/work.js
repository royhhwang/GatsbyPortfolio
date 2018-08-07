import React from 'react'
import { Fade, Flip } from 'react-reveal'
import Artsy from '../media/artsy.png'
import Ring from '../media/ring.jpg'
import Corgi from '../media/lowrescorgi.png'
import Usagi from '../media/bunnyonly.png'
import Race from '../media/racepaint.jpg'
import Wombat from '../media/wombatmain.png'
import '../css/work.css'

const Work = () => (
    <div>
        <Fade left>
            <div className="work-layer" id="projects">
                <h1>Projects</h1>
            </div>
        </Fade>
        <Fade>
            <div className="project-layer">
                <div className="project-blocks">
                    <a href="#about">
                        <div className="project-image">
                            <Fade bottom>
                                <div className="img-filler">&nbsp;</div>
                                <h2 className="project-title">Artsy</h2>
                            </Fade>
                        </div>
                        <img src={Artsy} alt="artsy image" />
                    </a>
                </div>
                <div className="project-blocks">
                    <a href="#about">
                        <div className="project-image">
                            <Fade bottom>
                                <div className="img-filler lg-img">&nbsp;</div>
                                <h2 className="project-title">In the Dark</h2>
                            </Fade>
                        </div>
                        <img src={Ring} alt="in the dark image" />
                    </a>
                </div>
                <div className="project-blocks">
                    <a href="#about">
                        <div className="project-image">
                            <Fade bottom>
                                <div className="img-filler">&nbsp;</div>
                                <h2 className="project-title">Corgi</h2>
                            </Fade>
                        </div>
                        <img src={Corgi} alt="corgi image" />
                    </a>
                </div>
                <div className="project-blocks">
                    <a href="#about">
                        <div className="project-image">
                            <Fade bottom>
                                <div className="img-filler">&nbsp;</div>
                                <h2 className="project-title">Usagi</h2>
                            </Fade>
                        </div>
                        <img src={Usagi} alt="usagi image" />
                    </a>
                </div>
                <div className="project-blocks">
                    <a href="#about">
                        <div className="project-image">
                            <Fade bottom>
                                <div className="img-filler lg-img">&nbsp;</div>
                                <h2 className="project-title">Race Paint</h2>
                            </Fade>
                        </div>
                        <img src={Race} alt="race painting image" />
                    </a>
                </div>
                <div className="project-blocks">
                    <a href="#about">
                        <div className="project-image">
                            <Fade bottom>
                                <div className="img-filler">&nbsp;</div>
                                <h2 className="project-title">Wombat</h2>
                            </Fade>
                        </div>
                        <img src={Wombat} alt="wombat image" />
                    </a>
                </div>
            </div>
        </Fade>
    </div >
)

export default Work