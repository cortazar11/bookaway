import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DatePicker from './DatePicker';
import CountryMenu from './CountryMenu';
import {connect} from 'react-redux';
import {createHoster} from '../actions';

class HosterForm extends React.Component {

    renderHosterName({input, label}){
            return (
                <div className="field">
                    <label>{label}</label>
                    <input {...input}/>
                </div>
            )
    }

    onSubmit=(formValues)=>{
        
        this.props.createHoster(formValues)
    }

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                    <Field name="hostname" type="text" component={this.renderHosterName} label="Hoster Name" />
                    <Field name="country" component={CountryMenu} change={this.props.change} label="Where do you want to go?" />
                    <p></p>
                    <Field name="dates" component={DatePicker} change={this.props.change} label="When do you want to go?"/>
                    <p></p>
                    <button className="ui button">SUBMIT</button>
                    
                </form>
                <p></p>
                <div>{this.props.hosters}</div>
            </div>
        )
    }
    
}

const mapStateToProps=({hosters})=>{
        return {
            hosters: hosters
        }
}

const formWrapped= reduxForm({
    form: 'hosterForm'
})(HosterForm);

export default connect(mapStateToProps,{
    createHoster
})(formWrapped)