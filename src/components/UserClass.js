import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            count: 1,
            count1: 5
        }
    }
    render() {
        const { location } = this.props;
        return (
            <div className="user-card">
                <h2>Name: {this.props.name}</h2>
                <h3>Location : {location}</h3>
                <h3>Counter: {this.state.count}</h3>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count +1
                    })
                }}>Increase Counter</button>
                <h4>Contact: {this.props.contact}</h4>
                <h4></h4>
            </div>
        )
    }
}
export default UserClass;