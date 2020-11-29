import './App.css';
import {Component} from 'react';
import Post from './post';
import CartItem from './cartitem';
import FilterMenu from './filtermenu';
import {Button} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

class App extends Component {
  constructor() {
    super();
    this.state = {
        posts: [
          {title: 'ORANGE TREE', key: 2, quantity: 0, price: 4.99, subject: 'nature', format: 'digital photo', photo: 'barcelona.JPG', desc: 'an orange tree on the streets of barcelona'},
          {title: 'MONOCHROME', key: 1, quantity: 0, price: 45, subject: 'architecture', format: 'limited edition print', photo: 'radcam.jpg', desc: 'the radcliffe camera on a cloudy morning at oxford'},
          {title: 'LONDON SKY', key: 0, quantity: 0, price: 35, subject: 'architecture', format: 'limited edition print', photo: 'london.JPG', desc: 'the london skyline from the top floor of the tate modern'},
          {title: 'LOST CANYON', key: 11, quantity: 0, price: 15.99, subject: 'nature', format: 'print', photo: 'canyon.JPG', desc: 'a canyon deep in the deserts of the american southwest'},
          {title: 'DESERT PATH', key: 5, quantity: 0, price: 4.99, subject: 'nature', format: 'digital photo', photo: 'desert.JPG', desc: 'a desert trail in southern new mexico'},
          {title: 'GARDEN OF GODS', key: 3, quantity: 0, price: 20.99, subject: 'nature', format: 'print', photo: 'gardengods.JPG', desc: 'a sandstone monument in garden of the gods colorado'},
          {title: 'MONTEREY', key: 6, quantity: 0, price: 15.99, subject: 'nature', format: 'print', photo: 'monterey.JPG', desc: 'a beach at golden hour in monterey california'},
          {title: 'GOLDEN', key: 7, quantity: 0, price: 4.99, subject: 'nature', format: 'digital photo', photo: 'goldengate.JPG', desc: 'the golden gate bridge in san francisco'},
          {title: 'HARBOR', key: 8, quantity: 0, price: 20.99, subject: 'architecture', format: 'print', photo: 'harbor.JPG', desc: 'a view overlooking baltimore harbor'},
          {title: 'PROVIDENCE', key: 9, quantity: 0, price: 4.99, subject: 'architecture', format: 'digital photo', photo: 'providence.JPG', desc: 'road leading into the city of providence rhode island'},
          {title: 'THE FOREST', key: 10, quantity: 0, price: 40, subject: 'nature', format: 'limited edition print', photo: 'fogforest.JPG', desc: 'a quiet morning in a foggy woodland'},
          {title: 'GREY', key: 4, quantity: 0, price: 4.99, subject: 'nature', format: 'digital photo', photo: 'boardwalk.JPG', desc: 'an overcast day in bombay hook wildlife refuge'},
        ],
        total: 0,
        sort: "featured",
        subject: "all",
        format: "all",
    }
  }
  addToCart = postToAdd => {
    // add 1 item to cart
    postToAdd.quantity = postToAdd.quantity + 1
    let posts = this.state.posts
    this.setState({posts});
    this.calcTotal()
  }
  removeFromCart = postToRemove => {
    // remove 1 item from cart
    if (postToRemove.quantity > 0) {
      postToRemove.quantity = postToRemove.quantity - 1
    }
    let posts = this.state.posts
    this.setState({posts});
    this.calcTotal()
  }
  calcTotal = () => {
    // calculate total cart price 
    let posts = this.state.posts
    let total = 0
    posts.forEach(post => {
      total = total + post.quantity*post.price
    })
    this.setState({total});
  }
  handleSort = (event) => {
    // change sort to new value
    let sort = event.target.value;
    this.setState({sort});
  };
  handleFilterSubject = (event) => {
    // change subject to new value
    let subject = event.target.value;
    this.setState({subject});
  };
  handleFilterFormat = (event) => {
    // change format to new value
    let format = event.target.value;
    this.setState({format});
  };

  render () { return (
    <div className="app">
      <div className="store">
        <h1 style={{fontFamily: 'Raleway', fontWeight: '700'}}>THE PHOTO & PRINT STORE</h1>
        <FilterMenu sort={this.state.sort} subject={this.state.subject} format={this.state.format} handleSort={this.handleSort} handleFilterSubject={this.handleFilterSubject} handleFilterFormat={this.handleFilterFormat}/>
        <br></br>
        <div className="postList">
          <Post posts={this.state.posts} addToCart={this.addToCart} subject={this.state.subject} format={this.state.format} sort={this.state.sort}/>
        </div>
      </div>
      <div className="cart">
        <h2 style={{fontFamily: 'Raleway', fontWeight: '600'}}>CART</h2>
        <CartItem posts={this.state.posts} addToCart={this.addToCart} removeFromCart={this.removeFromCart}/>
        <div className="total">
          <h2 className="totalText">Total: ${this.state.total.toFixed(2)}</h2>
        </div>
        <div className="checkoutDiv">
          <Button variant="contained" style={{backgroundColor: 'white'}}><ShoppingCartIcon/>Checkout</Button>
        </div>
      </div>
    </div>
  ) }
}

export default App;
