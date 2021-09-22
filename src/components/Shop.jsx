import React, {Component} from 'react'
import BigText from './BigText';
import Items from './Items';

class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="shop">
                <BigText>Watch Shop</BigText>
                <Items></Items>
            </div>
         );
    }
}
 
export default Shop;