import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import UserDisplay from '../containers/UserDisplay'

injectTapEventPlugin()

class Template extends Component {

    render() {

        return (
            <MuiThemeProvider>
                <div>
                    <header>
                        <h1>ninja bread</h1>
                        <UserDisplay/>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                </div>
            </MuiThemeProvider>
        )
    }
}

export default Template
