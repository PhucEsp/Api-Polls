import React, {Component} from 'react'

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            title: 'Phuc Nim',
        }
    }
    render() {
        return (
            <div>
                <h1>Hello React {this.state.title}</h1>
            </div>
        )
    }
}

export default Home;