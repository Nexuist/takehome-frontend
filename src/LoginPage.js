import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

function LoginPage(props) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [errorMessage, setErrorMessage] = useState("");
  let [attempting, setAttempting] = useState(false);
  let attempt = async (username, password) => {
    setAttempting(true);
    let result = await props
      .post("/users/me", { username, password })
      .then((res) => res.json());
    console.log(result);
    if (!result.success) {
      setErrorMessage("Couldn't log in - check your password and username!");
    } else if (!result.isDistributor) {
      setErrorMessage(
        "Your account is not a distributor! Contact the local admin to become one."
      );
    } else {
      let user = result;
      delete user.success;
      user.password = password;
      props.onLoggedIn(user);
    }
    setAttempting(false);
  };
  return (
    <Form className="form-signin text-center">
      <img className="mb-4" src="./logo.svg"></img>
      <h1 className="h3 mb-3 font-weight-normal">
        Welcome to the Distributor Dashboard
      </h1>
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      <Form.Label srOnly={true}>Username</Form.Label>
      <Form.Control
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <Form.Label srOnly={true}>Password</Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="primary"
        disabled={attempting}
        size="lg"
        block={true}
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          attempt(username, password);
        }}
      >
        {attempting ? "Signing in..." : "Sign In"}
      </Button>
      <p className="mt-5 mb-3 text-muted">© Andi Duro 2020</p>
      <p className="text-muted">
        Frontend developed with the help of the Bootstrap{" "}
        <a href="https://getbootstrap.com/docs/4.5/examples/sign-in/">
          Sign In
        </a>{" "}
        and{" "}
        <a href="https://getbootstrap.com/docs/4.5/examples/dashboard">
          Dashboard
        </a>{" "}
        templates.
      </p>
    </Form>
  );
}

export default LoginPage;
