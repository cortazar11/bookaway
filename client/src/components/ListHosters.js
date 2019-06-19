import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {Link} from 'react-router-dom';


class ListHosters extends React.Component {
    
    renderList(){
        const properties=this.props.hosters.map((item)=>{
           
            const startDate=moment(item.dates.startDate).format('DD MMM YYYY')
            const endDate=moment(item.dates.endDate).format('DD MMM YYYY')
                return (
                        <Link to={`/hosters/${item._id}`}>
                            <div key={item._id} className="ui segment">
                                <h3>{item.hostname}</h3>
                                <h4>{item.hostdirection}</h4>
                                <div>Country:&nbsp; {item.country}</div>
                                <div>Availability:
                                    <div>Start Date:&nbsp; {startDate}</div>
                                    <div>End Date:&nbsp; {endDate}</div>
                                </div>
                                
                            </div>
                        </Link>
                   
                )
        })
        
        return properties;
        
    }
    
    render(){
        return (
            <div>{this.renderList()}</div>
        )
    }
    
}

const mapStateToProps=({hostersList})=>{
    
    return {
        hosters: hostersList.hosters
    }
}

export default connect(mapStateToProps)(ListHosters);