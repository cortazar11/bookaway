import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';

import {fetchHost} from '../actions';

class DetailedHoster extends React.Component{
    componentDidMount(){
        const {id} =this.props.match.params;
        this.props.fetchHost(id)
    }

    render(){
        
        const host=this.props.host
        
        
        const startDate= host && host.dates ? moment(host.dates.startDate).format('DD MMM YYYY') : null
        const endDate=host && host.dates ? moment(host.dates.endDate).format('DD MMM YYYY') : null
        
        return (
            <div>
                <h3>AVAILABILITY</h3>
                <div className="ui horizontal segments">
                    <div className="ui segment">
                        {startDate}
                    </div>
                    <div className="ui segment">
                        {endDate}
                    </div>
                </div>
                <h3>DESCRIPTION</h3>
                <div className="ui segment">{host.description}</div>
                <h3>TYPE OF HELP</h3>
                <div className="ui segment">{host.typehelp}</div>
                <h3>CULTURAL EXCHANGE</h3>
                <div className="ui segment">{host.culturalexchange}</div>
                <h3>HELP</h3>
                <div className="ui segment">{host.help}</div>
                <h3>LANGUAGE</h3>
                <div className="ui segment">{host.language}</div>
                <h3>ACCOMMODATION</h3>
                <div className="ui segment">{host.accommodation}</div>
                <h3>HOURS EXPECTED</h3>
                <div className="ui segment">{host.hoursexpected}</div>
            </div>
        )
    }
    
}

const mapPropsToState=({hostersList})=>{
    return {
        host: hostersList.hoster
    }
}

export default connect(mapPropsToState,{
    fetchHost
})(DetailedHoster);