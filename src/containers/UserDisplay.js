import React, {Component} from 'react'

const left = {
    textAlign: 'left'
};

class UserDisplay extends Component {

    static defaultProps = {
        user: {
            email: 'williamcaseyclark@gmail.com',
            name: 'William Clark',
            keywords: [
                {
                    word: 'topics',
                    id: '0001',
                },
                {
                    word: 'todos',
                    id: '0002',
                },
                {
                    word: 'by month - october',
                    id: '0003',
                },

            ],
            notes: [
                {
                    entry: 'learn redux',
                    keywords: ['0001', '0002'],
                    timestamp: '01/14/2018',
                    id: '0001'
                },
                {
                    entry: 'disassemble table',
                    keywords: ['0001'],
                    timestamp: '02/14/2018',
                    id: '0002'
                },
                {
                    entry: 'bday: maggie - 10/11',
                    keywords: ['0003'],
                    timestamp: '02/16/2018',
                    id: '0003'
                },
                {
                    entry: 'register for baseball - feb',
                    keywords: ['0003'],
                    timestamp: '01/22/2018',
                    id: '0004'
                },
                {
                    entry: 'parking?',
                    keywords: ['0002'],
                    timestamp: '01/14/2018',
                    id: '0005'
                },
                {
                    entry: 'drill writing components',
                    keywords: ['0002'],
                    timestamp: '02/22/2018',
                    id: '0006'
                },

            ]
        }
    };

    render() {
        return (
            <div>
                <div style={left}>
                    Welcome, {this.props.user.name.split(' ')[0]}.
                </div>
                Signed In As: {this.props.user.email}
            </div>
        )
    }
}

export default UserDisplay