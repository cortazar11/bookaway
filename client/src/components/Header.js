import React from 'react';
import { Link } from 'react-router-dom'


const Header=()=>{
        return (
            <div>
                <Link to="/"><h1 className="ui header" >BookAway.com</h1></Link>
                <div className="ui secondary menu">
                    <div className="right menu">
                        <Link to="/hosters/new" className="item">New Host</Link>
                    </div>
                    
                </div>
                <div className="ui divider"></div>
            </div>
            
            
        )
}

export default Header;