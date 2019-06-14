import React from 'react';
import {connect} from 'react-redux';


class ListHosters extends React.Component {
    renderList(){
        const properties=this.props.hostersList.map((item)=>{
                return <div key={item._id} className="ui segment">{item.hostname}</div>
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
        hostersList: hostersList.hosters
    }
}

export default connect(mapStateToProps)(ListHosters);