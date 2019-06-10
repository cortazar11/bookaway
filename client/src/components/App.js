import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Landing from './Landing';
import ListHosters from './ListHosters';
import DetailedHoster from './DetailedHoster';
import Header from './Header';

const App=()=>{
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Route path="/" exact component={Landing} />
                <Route path='/hosters' component={ListHosters} />
                <Route path="/detailed" component={DetailedHoster}/>
            </BrowserRouter>
        </div>
    )
}

export default App;