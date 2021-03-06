const _ = require('lodash');
import React, {Component} from 'react'
import Relay from "react-relay";

class Retrieve extends Component {

    static defaultProps = {
        user: {
            email: 'williamcaseyclark@gmail.com',
            name: 'William Clark',
            keywords: [
                {
                    word: 'topics',
                    id: 1,
                },
                {
                    word: 'todos',
                    id: 2,
                },
                {
                    word: 'by month - october',
                    id: 3,
                },

            ],
            notes: [
                {
                    entry: 'learn redux',
                    keywords: [1, 2],
                    timestamp: '01/14/2018',
                    id: 1,
                    archive: false
                },
                {
                    entry: 'disassemble table',
                    keywords: [1],
                    timestamp: '02/14/2018',
                    id: 2,
                    archive: false
                },
                {
                    entry: 'bday: maggie - 10/11',
                    keywords: [3],
                    timestamp: '02/16/2018',
                    id: 3,
                    archive: false
                },
                {
                    entry: 'register for baseball - feb',
                    keywords: [3],
                    timestamp: '01/22/2018',
                    id: 4,
                    archive: false
                },
                {
                    entry: 'parking?',
                    keywords: [2],
                    timestamp: '01/14/2018',
                    id: 5,
                    archive: false
                },
                {
                    entry: 'drill writing components',
                    keywords: [2],
                    timestamp: '02/22/2018',
                    id: 6,
                    archive: true
                },

            ]
        }
    };

    get notes() {
        return this.props.user.notes.map( (note, index) => {
            return (
                <ul
                    key={index}
                >
                    { note.archive === false ? note.entry : null }
                </ul>
                )
        })
    }

    render(){
        return (
            <div>
                <h2>Retrieve</h2>
                {this.notes}
            </div>
        )
    }
}

export default Relay.createContainer(
    Retrieve, {
        fragments: {
            viewer: () => Relay.QL`
            fragment on Viewer {
                user {
                    id
                }
            }
         `,
        }
    }
)