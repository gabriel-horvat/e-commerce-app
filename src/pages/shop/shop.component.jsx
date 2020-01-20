import React from 'react'
import SHOP_DATA from './shop.data'

class ShopPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return(
            <div>
                ShopPage
            </div>
        )
    }
}

export default ShopPage