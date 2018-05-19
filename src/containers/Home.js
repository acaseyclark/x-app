import React, {Component} from 'react'

class Home extends Component {

    render() {
        return (
            <div>
            <h2>Home</h2>
                <div>
                    <a onClick={this.handleClick} style={{cursor: 'pointer'}}>Write</a>
                </div>
                <div>
                    <a onClick={this.handleClick} style={{cursor: 'pointer'}}>Retrieve</a>
                </div>
            </div>
        )
    }
}

export default Home
