import React from 'react'
import {Route, IndexRoute} from 'react-router'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Add from '../containers/Write'
import Retrieve from '../containers/Retrieve'
import Relay from 'react-relay'

const ViewerQueries = {
    viewer: () => Relay.QL`query { viewer }`
}

const createRoutes = () => {
    return (
        <Route
            path='/'
            component={Template}
            queries={ViewerQueries}
        >
            <IndexRoute
                component={Home}
            >

            </IndexRoute>

            <Route
                path='/profile'
                component={Profile}
                queries={ViewerQueries}
            >
            </Route>

            <Route
                path='/write'
                component={Add}
                queries={ViewerQueries}
            >
            </Route>

            <Route
                path='/retrieve'
                component={Retrieve}
                queries={ViewerQueries}
            >
            </Route>

        </Route>

    )
}

const Routes = createRoutes()

export default Routes
