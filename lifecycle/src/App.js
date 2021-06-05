import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
      userFollowers: [],
    };
  }

  componentDidMount() {
    //this is where you fecth the data
    axios
      .get("https://api.github.com/users/joseguevara29")
      .then((response) =>
        this.setState({ ...this.state, userInfo: response.data })
      )
      .catch((error) => console.log(error));
    axios
      .get("https://api.github.com/users/joseguevara29/followers")
      .then((response) =>
        this.setState({ ...this.state, userFollowers: response.data })
      )
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <h1>Github UserCard</h1>
        <UserCard
          userInfo={this.state.userInfo}
          userFollowers={this.state.userFollowers}
        />
      </div>
    );
  }
}

export default App;
