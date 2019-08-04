import React from 'react';
import { Link } from "react-router-dom";
import './shortPost.css';

class ShortPost extends React.Component {
    render() {
        return (
            <div className='short-post'>
                <img className='post-photo' alt='post' src={this.props.image} />
                <p><Link className='short-post-link' to={{pathname: '/blog/' + this.props.post.title, state: {post: this.props.post}}} ><h3 className='short-post-title'>{this.props.post.title}</h3></Link>
                <span className='short-post-meta-author'>{this.props.post.author}</span> - <span className='short-post-meta-date'>{this.props.post.created.split('T')[0]}</span>
                <br />
                <span className='post-exerpt'>{this.props.excerpt}... <Link to={{pathname: '/blog/' + this.props.post.title, state: {post: this.props.post}}} >Read More</Link></span></p>
            </div>
        );
    }
}

export default ShortPost;