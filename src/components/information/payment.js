import React, { Component } from 'react';

import PageTitle from '../pageTitle';

import { connect } from 'react-redux';
import * as actions form '../../actions';

class Payment extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='sign-in'>
                <PageTitle className='sign-in__page-title' title='Payment Information' />
            </div>
        )
    }
}

Payment = connect(null, actions)(Payment);

export default Payment;