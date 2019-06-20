import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Landing from './Landing';
import ListHosters from './ListHosters';
import HosterNew from './HosterNew';
import DetailedHoster from './DetailedHoster';
import Header from './Header';

const App=()=>{
    return (
        <div className="ui container">
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path='/hosters' exact component={ListHosters} />
                    <Route path="/hosters/new" exact component={HosterNew} />
                    <Route path="/hosters/:id" exact component={DetailedHoster}/>
                </Switch>
                
            </BrowserRouter>
        </div>
    )
}

export default App;