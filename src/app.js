import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Main from './components/main';
import FavoriteDrink from './components/favorite/favDrink';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <>
                <header />
                <BrowserRouter>
                    <switch>
                        <Router exact path='/'>
                            <main />
                            </Route>


                        <Route exact path="/favorite">

                            <FavoriteDrink />
                        </Route>
                    </Switch>
                </BrowserRouter>

            </>
        )
    }
}

export default App;