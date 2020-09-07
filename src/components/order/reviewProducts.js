import React, { Component } from 'react';

import { connect } from 'react-redux';

class ReviewProducts extends Component {
    render() {
        const { className } = this.props;
        return (
            <div className={`${className} review-products`}>
                jkhkjdhkjfhdjksahfjk
                {
                    this.props.cartProducts.map(cartProduct => {
                        return <ReviewProduct key={cartProduct._id}{...cartProduct}/>
                    })
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts } 
}

ReviewProducts = connect(mapStateToProps)(ReviewProducts);

export default ReviewProducts;