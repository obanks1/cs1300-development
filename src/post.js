import {Component} from 'react';
import {Button} from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

class Post extends Component {
    /* defines how posts look in the shopping area */
    createPost = post => {
        return (
            <div className="post" key={post.key}>
                <div className="postText">
                    <div className="description">
                        <h3>{post.title}</h3>
                        <p style={{lineHeight: '25px', margin: 0,}}>subject: {post.subject}</p>
                        <p style={{margin: 0,}}>format: {post.format}</p>
                        <div className="description"><p>{post.desc} </p></div>
                    </div>
                    <h4 className="price">${post.price.toFixed(2)}</h4>
                    <Button className="addButton" size="medium" color="inherit" style={{padding: 0, backgroundColor: 'rgba(256, 256, 256, 0.7)'}} onClick={() => this.props.addToCart(post)}><AddShoppingCartIcon/><h5 className="quantity">{post.quantity}</h5></Button>
                </div>
                <img src={post.photo} alt="visual of product" className="photo"></img>
            </div>
        )
    }
    render () {
        let posts = this.props.posts
        // filter posts by subject and format
        posts = (this.props.subject !== 'all')? posts.filter(post => post.subject === this.props.subject) : posts
        posts = (this.props.format !== 'all')? posts.filter(post => post.format === this.props.format) : posts
        // sort posts by price or most recent first
        posts = (this.props.sort === 'price')? posts.sort(function(a, b){return a.price - b.price}) : posts.sort(function(a, b){return a.key - b.key})
        const content = posts.map(this.createPost)
        return (
            content
        )
    }
}

export default Post;