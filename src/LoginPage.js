import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

function LoginPage(props) {
  const [loggedIn, setLoggedIn] = useState(false);
  return loggedIn ? (
    <p>hi</p>
  ) : (
    <Form className="form-signin text-center">
      <img className="mb-4" src="./logo.svg"></img>
      <h1 className="h3 mb-3 font-weight-normal">
        Welcome to the Distributor Dashboard
      </h1>
      <Form.Label srOnly={true}>Email address</Form.Label>
      <Form.Control type="email" placeholder="Email address" />
      <Form.Label srOnly={true}>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
      <Button
        variant="primary"
        size="lg"
        block={true}
        type="submit"
        onClick={() => setLoggedIn(true)}
      >
        Submit
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
