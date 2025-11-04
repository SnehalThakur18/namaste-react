import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    //creating state in a class based component
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Dummy Location",
      },
    };

    console.log("child constructor");
  }

  async componentDidMount() {
    console.log("child component did mount");
    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("child render");
    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <img src={avatar_url} />
      </div>
    );
  }
}

export default UserClass;