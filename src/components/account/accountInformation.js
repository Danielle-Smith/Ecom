import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import AccountInformationForm from './accountInformationForm';

class AccountInformation extends Component {

    onSubmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='account-information'>
                <Pagetitle className='account-information' title='Account Information' />
                <AccountInformationForm onSubmit={thisonSubmit} className='account-information__form' />
            </div>
        )
    }
}

export default AccountInformation;