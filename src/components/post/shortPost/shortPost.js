import React from 'react';
import { Link } from "react-router-dom";
import './shortPost.css';

class ShortPost extends React.Component {
    render() {
        return (
            <div className='short-post'>
                <img className='post-photo' alt='post' src={this.props.post.photo} />
                <p className='post-exerpt'>{this.props.excerpt}... <Link to={{pathname: '/blog/' + this.props.post.title, state: {post: this.props.post}}} >Read More</Link></p>
            </div>
        );
    }
}

export default ShortPost;