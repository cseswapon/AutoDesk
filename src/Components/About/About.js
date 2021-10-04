import React from 'react';
import cover from '../../img/cover.jpg';
import logo from '../../img/logo.png';
import './About.css';
const About = () => {
    return (
        // main section start
        <div>
            <div className="img-cover">
                <img src={cover} alt="" />
            </div>
            <div className="img-logo">
                <img src={logo} alt="" />
            </div>
            <div className="our-service">
                <h1>About Us</h1>
            </div>
            <div className="about-paragraph">
                {/* details section */}
                <div className="paragraph">
                    <p>
                        The <strong>Training Center</strong> is a training platform operated by the Alliance for Responsible Mining and aims to serve as a virtual space for the dissemination of knowledge of different issues regarding fair and responsible small-scale artisanal mining.
                    </p>
                    <p>
                        We have open courses where access is available to all, and we also create trainings for specific groups. Click to access the ARM Training Center.
                    </p>
                    <p style={{ fontSize: "30px" }}>
                        Our center believes in the potential of ASM and seeks to have a positive impact on regions, communities and the environment through education and training under the Fairmined Standard
                    </p>
                    <p>
                        Our training uses a <strong>virtual methodology</strong>, and has different modules that contain guidelines for the development of good practices in the areas covered by the Fairmined Standard: social development, economic development, environmental protection and working conditions.
                    </p>
                    <p>
                        This training system is aimed at knowledge multipliers working with ASM. The main objective is to accumulate a network of trainers capable of accompanying the adoption of a Sustainable Management System in ASM.
                    </p>
                    <p>
                        These strategies seek to improve the <strong>capacities of local organizations</strong> to support the formalization of the sector and facilitate access to better opportunities for the miners.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;