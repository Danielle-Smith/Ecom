import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <input className={ `${props.className} form-search-bar`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
    )
}

class ShopSearchBar extends Component {
    rener() {
        const { className, handleSubmit } = this.props;
        return (
            <Form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='query' className='shop-seach-bar__form-seach-bar' placeholder='search' component={FormSearchBar} />
            </Form>
        )
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;