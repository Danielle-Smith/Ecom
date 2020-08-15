import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <div className='search-bar-grid'>
            <i className="fas fa-search search-bar-grid__icon"></i>
            <input className={ `${props.className} form-search-bar`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
        </div>
    )
}

class ShopSearchBar extends Component {
    rener() {
        const { className, handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='query' className='shop-seach-bar__form-seach-bar' placeholder='Search' component={FormSearchBar} />
            </Form>
        )
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;