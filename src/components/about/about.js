import React from 'react';
import { Container, Col } from 'reactstrap';
import './about.css';

export default class About extends React.Component {

    render() {
        return (
            <Container className='body-content'>
                <Col id="experience">
                    <h2>Experience</h2>
                    <p><span className="company">Novartis Institutes for BioMedical Research,</span> Cambridge, MA <span className="date-range">January 2019 – June 2019</span><br/>
                    <span className="job-title">Data Informatics, Coop</span></p>
                    <ul>
                        <li>
                            Developed and deployed a data pipeline to extract, write, transform, and store data in the cloud using Java with Maven
                        </li>
                        <li>
                            Devised a cloud architecture leveraging a variety of AWS tools including Lambda, EC2, S3, Dynamo, and several others
                        </li>
                        <li>
                            Wrote tool using Terraform, CloudFormation, Swagger, and jQuery to stop unused EC2 instances and allow users to turn them on via a web interface
                        </li>
                        <li>
                            Significantly deepened skills in Software Development, knowledge of cloud computing with AWS, and Agile project management with Jira
                        </li>
                    </ul>
                    <p><span className="company">ERT,</span> Boston, MA <span className="date-range">January 2018 – August 2018</span><br/>
                    <span className="job-title">Project Automation Test Engineer, Coop</span></p>
                    <ul>
                        <li>
                            Developed a product to automate testing of applications on devices using Robot Framework and Python
                        </li>
                        <li>
                            Contributed to automation product for use company-wide
                        </li>
                        <li>
                            Strengthened skills in Python, JavaScript, Data Structures, and testing and packaging technologies
                        </li>
                    </ul>
                    <p><span className="company">WRBB Student Radio,</span> Boston, MA <span className="date-range">September 2016 – December 2019</span><br/>
                    <span className="job-title">Webmaster (previously Director of Technology/Engineering)</span></p>
                    <ul>
                        <li>
                            Redesigned and managed station website which receives over 10,000 views a month
                        </li>
                        <li>
                            Supervised a team of students to oversee all technological aspects of the station
                        </li>
                        <li>
                            Managed all radio equipment and oversaw broadcasting
                        </li>
                    </ul>
                </Col>
                <Col id="education">
                    <h2>Education</h2>
                    <p><span className="company">Northeastern University,</span> Khoury College of Computer Sciences<br/>
                    <span className="job-title">Candidate for a Bachelor of Science in Computer Science &amp; Biology</span><br/>
                    <span className="honors">Honors:</span> G.P.A. 3.754/4.0, Dean’s List
                    </p>
                </Col>
                <Col id="skills">
                    <h2>Skills</h2>
                </Col>
            </Container>
        )
    }
}
