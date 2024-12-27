import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            userInfo: {
                name: 'dummay name',
                location: 'default location',
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Aryan-2399");
        const response = await data.json();
        console.log(response);
        this.setState({
            userInfo: {
                name: response.name,
                location: response.location,
                avatar_url: response.avatar_url,
                contact: response.login
            }
        })
    }
    render() {
        return (
            <div className="user-card">
                <img src={this.state.userInfo.avatar_url} />
                <h2>Name: {this.state.userInfo.name}</h2>
                <h3>Location : {this.state.userInfo.location}</h3>
                <h4>Contact: {this.state.userInfo.contact}</h4>
                <h4></h4>
            </div>
        )
    }
}
export default UserClass;