import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    customWidth: {
        width: 200,
    },
};

export default class DropDownMenuSimpleExample extends React.Component {

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

    constructor(props) {
        super(props);
        this.state = {value: 1};
    }

    handleChange = (event, index, value) => this.setState({value});

    render() {
        return (
            <div>
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                    <MenuItem value={1} primaryText="Never" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
                <br />
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
                >
                    <MenuItem value={1} primaryText="Custom width" />
                    <MenuItem value={2} primaryText="Every Night" />
                    <MenuItem value={3} primaryText="Weeknights" />
                    <MenuItem value={4} primaryText="Weekends" />
                    <MenuItem value={5} primaryText="Weekly" />
                </DropDownMenu>
            </div>
        );
    }
}