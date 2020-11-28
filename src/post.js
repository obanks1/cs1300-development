import {Component} from 'react';
import {Container, Button} from '@material-ui/core';

class Post extends Component {
    createPost = post => {
        return (
            <Container className="post" key={post.key}>
                <h3>{post.title}</h3>
                <p>Content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content content</p>
                <div className="sidebyside">
                    <Button size="medium" color="inherit" onClick={() => this.props.addLike(post)}>Like</Button>
                <h5 className="likecount">{post.likes}</h5>
                </div>
            </Container>
        )
    }
    render () {
        const posts = this.props.posts
        const content = posts.map(this.createPost)
        return (
            content
        )
    }
}

export default Post;