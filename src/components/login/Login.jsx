import React, { useState } from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  let history = useHistory();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://input-box-backend-n5ys567oc-dipesh-j.vercel.app/login",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );
    const json = await response.json();
      console.log(response)
    if (response.status) {
      localStorage.setItem('token', json.token)
      // handle successful login here
      history.push("/inputbox")
      alert("Logged in successfully")
      console.log("logged in successfully grant all the permissions")
    } else {
      // handle failed login here
      const errorMessage = json.message
      alert(errorMessage)
      console.log("Something is fishy")
    }
  };

  return (
    <Container className="Login-header">
      <h1>Login Page</h1>
      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
