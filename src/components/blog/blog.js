import React from 'react';
import { Container} from 'reactstrap';
import Header from '../header/header';
import Footer from '../footer/footer';
import Search from '../search/search';
import Spacer from '../spacer/spacer';
import ShortPost from '../post/shortPost/shortPost';
import Pagination from '../pagination/pagination';
import missing from '../../assets/fa-image.png';
import './blog.css';

const postContent = "Bacon ipsum dolor amet alcatra prosciutto boudin cow, \
    rump jerky landjaeger burgdoggen pork chop tongue ball tip buffalo ham hock doner. \
    Buffalo shoulder prosciutto boudin turducken ribeye, meatloaf chuck bacon andouille \
    burgdoggen kielbasa biltong pastrami. Short loin shoulder beef ribs meatloaf \
    pancetta, pig tail pork loin kevin t-bone. \
    Bacon ipsum dolor amet alcatra prosciutto boudin cow, \
    rump jerky landjaeger burgdoggen pork chop tongue ball tip buffalo ham hock doner. \
    Buffalo shoulder prosciutto boudin turducken ribeye, meatloaf chuck bacon andouille \
    burgdoggen kielbasa biltong pastrami. Short loin shoulder beef ribs meatloaf \
    pancetta, pig tail pork loin kevin t-bone. \
    Bacon ipsum dolor amet alcatra prosciutto boudin cow, \
    rump jerky landjaeger burgdoggen pork chop tongue ball tip buffalo ham hock doner. \
    Buffalo shoulder prosciutto boudin turducken ribeye, meatloaf chuck bacon andouille \
    burgdoggen kielbasa biltong pastrami. Short loin shoulder beef ribs meatloaf \
    pancetta, pig tail pork loin kevin t-bone. \
    Bacon ipsum dolor amet alcatra prosciutto boudin cow, \
    rump jerky landjaeger burgdoggen pork chop tongue ball tip buffalo ham hock doner. \
    Buffalo shoulder prosciutto boudin turducken ribeye, meatloaf chuck bacon andouille \
    burgdoggen kielbasa biltong pastrami. Short loin shoulder beef ribs meatloaf \
    pancetta, pig tail pork loin kevin t-bone."

const postImage = missing;

const generatePosts = () => {
    return Array.from(
        Array(5).fill().map((_, index) => {
            const post = {
                title: 'post' + index,
                photo: postImage,
                content: postContent,
            }
            return post;
        })
    );
}

const renderPosts = () => {
    const posts = generatePosts();
    return Array.from(
        posts.map((post, _) => {
            const excerpt = getPostExcerpt(post.content, 100);
            return <ShortPost excerpt={excerpt} post={post} />
        })
    )
}

const getPostExcerpt = (postContent, excerptLength) => {
    const words = postContent.split(" ")
    const excerpt = words.slice(0, excerptLength).join(' ');
    return excerpt;
}

class Blog extends React.Component {

    render() {
        return (
            <div id='outer'>
                <Header />
                <div id='wrapper'>
                    <Container className='body-content'>
                        <Spacer height='100px' />
                        <Search />
                        <div className='post-container'>
                            {renderPosts()}
                        </div>
                        <Pagination numLinks={5} />
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Blog;