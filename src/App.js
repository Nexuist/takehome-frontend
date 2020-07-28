import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginPage from "./LoginPage";
import Dashboard from "./Dashboard";

const ENDPOINT = "https://2vdet6m87c.execute-api.us-east-1.amazonaws.com/dev";

const post = async (resource, json) => {
  return fetch(ENDPOINT + resource, {
    method: "POST",
    body: JSON.stringify(json),
  });
};

function App() {
  let [userAccount, setUserAccount] = useState({});
  return (
    <Dashboard
      post={post}
      user={{ username: "supermarket", password: "blockchain" }}
    />
  );
  // return userAccount.username ? (
  //   <Dashboard
  //     post={post}
  //     user={userAccount}
  //     onLogOut={() => setUserAccount({})}
  //   />
  // ) : (
  //   <LoginPage
  //     post={post}
  //     onLoggedIn={(acc) => setUserAccount(acc)}
  //   ></LoginPage>
  // );
}

export default App;
