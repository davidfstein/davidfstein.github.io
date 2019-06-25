import React from 'react';
import { Container, Col } from 'reactstrap';
import './about.css';

export default class About extends React.Component {

    render() {
        return (
            <div>
                <Container>
                    <Col id="about">
                        <h2>About</h2>
                        <p>Taxidermy typewriter man bun, shabby chic gentrify nulla la croix ad pop-up. 
                            Helvetica narwhal humblebrag excepteur. Chia godard excepteur cred eu VHS 
                            cardigan cornhole ipsum palo santo qui labore 90's vaporware heirloom. 
                            Adipisicing pinterest lorem glossier lyft pour-over mollit nisi hoodie 
                            everyday carry raw denim incididunt sriracha fingerstache. YOLO pug locavore, 
                            fam yuccie magna palo santo ut enim cred irony next level ugh live-edge ennui. 
                            Duis tumblr pok pok distillery, in vegan flexitarian portland semiotics butcher et.</p>
                    </Col>
                    <Col id="experience">
                        <h2>Experience</h2>
                        <h6>Novartis Institutes for BioMedical Research, </h6>
                        <p>Cambridge, MA</p>
                    </Col>
                </Container>
            </div>
        )
    }
}
