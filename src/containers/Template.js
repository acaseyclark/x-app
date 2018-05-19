import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

// const heading: { 'text-shadow': '2px 2px #FF0000' };
// const ta = { margin: '20px' };

injectTapEventPlugin()

class Template extends Component {

    render() {

        return (
            <MuiThemeProvider>
                <div>
                    <header>
                        <h1>retrieveApp</h1>
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
