import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }

  render() {
    console.log("parent render");
    return (
      <div>
        <h2>Welcome to About Us Page</h2>
        {/* <User /> */}
        <UserClass name={"First"} location={"Pune (class props)"} />
      </div>
    );
  }
}

// const AboutUs = () => {
//   return (
//     <div>
//       <h2>Welcome to About Us Page</h2>
//       <User />
//       <UserClass
//         name={"Snehal Thakur (class props)"}
//         location={"Pune (class props)"}
//       />
//     </div>
//   );
// };

export default AboutUs;
