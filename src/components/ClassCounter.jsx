import React from "react";

class ClassCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.degree = this.degree.bind(this);
        this.disgree = this.disgree.bind(this);
    }

    degree() {
        this.setState({count: this.state.count + 1})
    }

    disgree() {
        this.setState({count: this.state.count - 1})
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.degree}>+</button>
                <button onClick={this.disgree}>-</button>
            </div>
        )
    }
}

export default ClassCounter;