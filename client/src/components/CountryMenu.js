import React from 'react';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import '../../src/index.css';

class CountryMenu extends React.Component {
    state={
        country: '',
        region: ''
    }

    selectCountry=(val)=>{
        this.setState({
            country: val
        })
       this.props.change(this.props.input.name,val)
    }

    selectRegion=(val)=>{
        this.setState({
            region: val
        })

        this.props.change(this.props.input.name,val)
    }

    render(){
        const {country,region} = this.state;

        return (
            <div>
                <div className="field">
                    <label>{this.props.label}</label>
                    <div>
                        <CountryDropdown
                            value= {country}
                            onChange={(val)=>this.selectCountry(val)}
                            
                        />
                    </div>
                    <div>
                        <RegionDropdown
                            country={country}
                            value={region}
                            onChange={(val)=>this.selectRegion(val)}
                        />
                    </div>
                </div>
            </div>
            
        )
    }
}

export default CountryMenu;