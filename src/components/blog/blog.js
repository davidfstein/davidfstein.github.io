import React from 'react';
import { Container} from 'reactstrap';
import Header from '../header/header';
import Footer from '../footer/footer';
import Search from '../search/search';
import Spacer from '../spacer/spacer';
import ShortPost from '../post/shortPost/shortPost';
import Pagination from '../pagination/pagination';
import PostServiceClient from '../../services/post-service';
import missing from '../../assets/fa-image.png';
import './blog.css';

const postImage = missing;

class Blog extends React.Component {

    constructor() {
        super();
        this.state = {
            shortPosts: [],
        }
    }

    componentDidMount = () => {
        this.getPosts()
    }

    renderPosts = (posts) => {
        return Array.from(posts.map((post, _) => {
            const excerpt = this.getPostExcerpt(post.body, 40);
            return <ShortPost excerpt={excerpt} post={post} image={postImage} />
        }))
    }

    getPosts = async () => {
        const posts = await new PostServiceClient().getPosts();
        const shortPosts = this.renderPosts(posts);
        this.setState({
            shortPosts: shortPosts,
        });
    }

    getPostExcerpt = (postContent, excerptLength) => {
        const words = postContent.split(" ")
        const excerpt = words.slice(0, excerptLength).join(' ');
        return excerpt;
    }

    render() {
        return (
            <div id='outer'>
                <Header />
                <div id='wrapper'>
                    <Container className='body-content'>
                        <Spacer height='100px' />
                        <Search />
                        <div className='post-container'>
                            {this.state.shortPosts}
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