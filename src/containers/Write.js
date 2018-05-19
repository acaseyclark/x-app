import React, {Component} from 'react'
import Button from 'react-bootstrap/lib/Button';

const ta = { margin: '20px' };

class Write extends Component {

    render() {
        return (
            <div>
                <h2>Write</h2>
                <div className={ta} style={ta}>
                    <textarea rows="4" cols="50">
                    </textarea>
                    <div>
                        <Button
                            bsSize="large"
                            onClick={()=>{console.log('Hello - I work.')}}
                        >
                            Add Note To Your System
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Write