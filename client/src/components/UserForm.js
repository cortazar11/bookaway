import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DatePicker from './DatePicker';
import CountryMenu from './CountryMenu';


class UserForm extends React.Component {
    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    

      
    onSubmit(formValues){
        console.log('formValues. '+JSON.stringify(formValues))
    }

    

    render(){
        
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                <Field name="country" component={CountryMenu} change={this.props.change} label="Where do you want to go?" />
                <p></p>
                <Field name="dates" component={DatePicker} change={this.props.change} label="When do you want to go?"/>
                <p></p>
                <button className="ui button">SEARCH</button>
                
            </form>
           
        )
    }
}

const validate=(formValues)=>{
    const errors={};

    if(!formValues.country){
        errors.country="Enter country"
    }

    if(!formValues.dates){
        errors.checkIn="enter check-in"
    }

    return errors
}

export default reduxForm({
    form: 'userForm',
    validate
})(UserForm);