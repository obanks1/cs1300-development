import {Component} from 'react';
import {Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {withStyles} from '@material-ui/core/styles';

const CustomButton = withStyles({
    /* Defines custom styling for add and remove from cart buttons */
    root: {
        backgroundColor: '#c9d6df',
        maxWidth: '25px', 
        maxHeight: '25px', 
        minWidth: '25px', 
        minHeight: '25px',
        marginTop: '5px',
    },
  })(Button);

class CartItem extends Component {
    /* puts elements of post into a compact format to show in the shopping cart*/
    createItem = post => {
        return (
            <div className="item" key={post.key}>
                <div className="cartText">
                    <div className="cartItemDescription">
                        <h3 className="cartTitle">{post.title}</h3>
                        <h4 className="cartPrice">${post.price.toFixed(2)}</h4>
                        <div><p style={{marginRight: '10px'}}>{post.desc}</p></div>
                    </div>
                    <div className="sidebyside">
                        <CustomButton variant="contained" size="small" color="inherit" className="button" onClick={() => this.props.addToCart(post)}><AddIcon style={{maxWidth: '20px'}}/></CustomButton>
                        <h5>{post.quantity}</h5>
                        <CustomButton variant="contained" size="small" color="inherit" onClick={() => this.props.removeFromCart(post)}><RemoveIcon style={{maxWidth: '20px'}}/></CustomButton>
                    </div>
                </div>
                <img src={post.photo} alt="visual of product" className="cartPhoto"></img>
            </div>
        )
    }
    render () {
        // if at least 1 of the item has been added, item shows up in cart
        const posts = this.props.posts.filter(post => post.quantity > 0)
        const content = posts.map(this.createItem)
        return (
            content
        )
    }
}

export default CartItem;