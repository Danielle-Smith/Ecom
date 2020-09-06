import React, { Component } form 'react';

import { reduxForm, Field } form 'redux-form';

import { FormButton } '../formFields';

import history from '../../history';

class ReviewForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} rebiew-form`}>
                <div className='review-form__line'></div>
                <Field className='review-form__proceed'
                onClick={() => history.push('/account')}
                type='submit'
                title='Proceed to Checkout'
                name='proceed'
                component={FormButton}/>
                <Field className='review-form__back'
                onClick={() => history.push('/shop')}
                type='button'
                title='Back'
                name='back'
                short={true}
                component={FormButton}/>
            </form>
        )
    }
}

RevireForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);

export default ReviewForm;