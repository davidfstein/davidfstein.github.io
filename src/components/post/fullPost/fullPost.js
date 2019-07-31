import React from 'react';
import { Container } from 'reactstrap';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Spacer from '../../spacer/spacer';
import './fullPost.css';

class FullPost extends React.Component {

    render() {
        return (
            <div id='outer'>
                <Header />
                <div id='wrapper'>
                    <Container className='body-content'>
                        <Spacer height='50px' />
                        <div className='fullPost'>
                            <h2 className='postTitle'>{this.props.location.state.post.title.toUpperCase()}</h2>
                            <br />
                            <p>
                                {this.props.location.state.post.content}
                            </p>
                        </div>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default FullPost;