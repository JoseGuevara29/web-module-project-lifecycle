import React from "react";

export default function userCard(props) {
  //   console.log(props.userInfo);
  //   console.log(props.userInfo.avatar_url);
  //   console.log(props.userInfo.name);
  //   console.log(props.userFollowers.length);
  return (
    <div className="user">
      <img src={props.userInfo.avatar_url} />
      <div className="details">
        <p>Name: {props.userInfo.name}</p>
        <p>Github username: {props.userInfo.login}</p>
        <p>Location: {props.userInfo.location}</p>
        <p>Public Repos: {props.userInfo.public_repos}</p>
        <p>Follower Count: {props.userFollowers.length}</p>
      </div>
    </div>
  );
}
