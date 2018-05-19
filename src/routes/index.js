import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Add from '../containers/Write'
import Retrieve from '../containers/Retrieve'

//add
//retrieve

const createRoutes = () => {
    return (
        <Route
            path='/'
            component={Template}
        >
            <IndexRoute
                component={Home}
            >

            </IndexRoute>

            <Route
                path='/profile'
                component={Profile}
            >

            </Route>

            <Route
                path='/write'
                component={Add}
            >

            </Route>

            <Route
                path='/retrieve'
                component={Retrieve}
            >

            </Route>

        </Route>

    )
}

const Routes = createRoutes()

export default Routes
