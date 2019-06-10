import React from 'react';
import 'react-dates/initialize';
import {DateRangePicker} from 'react-dates';
import "react-dates/lib/css/_datepicker.css";
import moment from 'moment';

class DatePicker extends React.Component {
    state={
        startDate: moment(),
        endDate: moment(),
        focusedInput: null
    }

    onDatesChange=({startDate,endDate})=>{
      
        this.setState({
            startDate,
            endDate
        });
        this.props.change(this.props.input.name,{startDate,endDate})
    }

    onFocusChange=(focusedInput)=>{
        this.setState({
            focusedInput
        })
}

    render(){
        const {input}= this.props
        
        return (
            <div>
                <div className="field">
                    <label>{this.props.label}</label>
                    <div>
                        <DateRangePicker
                            startDatePlaceholderText="Check-In"
                            endDatePlaceholderText="Check-Out"
                            startDate={this.state.startDate}
                            startDateId="start"
                            endDate={this.state.endDate}
                            endDateId="end"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={this.onFocusChange}
                                
                        />
                    </div>
                
                </div>
                
            </div>
            
        )
    }
}

export default DatePicker;