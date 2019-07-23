import React from 'react';
import { Container} from 'reactstrap';
import Header from '../header/header';
import Footer from '../footer/footer';
import Search from '../search/search';
import Post from '../post/post';
import Spacer from '../spacer/spacer';
import Pagination from '../pagination/pagination';
import './blog.css';

function Blog() {
    return (
        <div id='outer'>
            <Header />
            <div id='wrapper'>
                <Container className='body-content'>
                    <Spacer height='100px' />
                    <Search />
                    <Post />
                    <Pagination numLinks={5} />
                </Container>
            </div>
            <Footer />
        </div>
    );
}

export default Blog;