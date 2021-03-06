import React from 'react';
import {Field, reduxForm} from 'redux-form';
import DatePicker from './DatePicker';
import CountryMenu from './CountryMenu';
import {connect} from 'react-redux';
import {createHoster} from '../actions';

class HosterForm extends React.Component {

    renderText({input,label}){
        
            return (
                <div className="field">
                    <label>{label}</label>
                    <textarea {...input}></textarea>
                </div>
            )
    }

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
                <h3>FORM FOR HOSTS</h3>
                <div className="ui segment">
                    <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error" >
                        <Field name="hostname" type="text" component={this.renderHosterName} label="Host Name" />
                        <Field name="hostdirection" type="text" component={this.renderHosterName} label="Host Direction"/>
                        <Field name="description"  component={this.renderText} label="Description" />
                        <Field name="typehelp"  component={this.renderText} label="Type of Help" />
                        <Field name="culturalexchange"  component={this.renderText} label="Cultural Exchange" />
                        <Field name="help"  component={this.renderText} label="Help" />
                        <Field name="language"  component={this.renderText} label="Languages spoken" />
                        <Field name="accommodation"  component={this.renderText} label="Accommodation" />
                        <Field name="hoursexpected"  component={this.renderText} label="Hours expected" />
                        <Field name="country" component={CountryMenu} change={this.props.change} label="Where are you from?" />
                        <p></p>
                        <Field name="dates" component={DatePicker} change={this.props.change} label="How long will you take a volunteer?"/>
                        <p></p>
                        <button className="ui button">SUBMIT</button>
                        
                    </form>
                    <div>{this.props.hosters}</div>
                </div>
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