import React, { useState } from 'react'
// import {Redirect} from "react-router-dom"
import "./InputBox.css"
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";


export function InputBox() {
    const [text, setText] = useState("");

    const handleTextChange = (e) => {
      setText(e.target.value);
    };
  
    const handleStoreClick = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch(
          "https://input-box-backend-habpjfbep-dipesh-j.vercel.app/addText",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ text }),
          }
        );
        const data = await response.json();
        if (data.status === true) {
          alert("Your message is safe with us (⌐■_■) ");
          console.log(data);
          setText("");
        } else {
          alert(data.message);
        }
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    };
    // if (!isLoggedIn) {
    //   return <Redirect to="/login" />;
    // }
    return (
      <div className="Box">
        <header className="Box-header">
          <h3 className="heading">Something to say?</h3>
          <FloatingLabel
            controlId="floatingTextarea"
            className="mb-3"
            value={text}
            onChange={handleTextChange}
          >
            <Form.Control
              size="lg"
              as="textarea"
              placeholder="You can write something here"
              className="placeholder-text"
              style={{ color: 'black' }}
            />
          </FloatingLabel>
          <Button
            as="input"
            type="submit"
            value="Submit"
            variant="outline-success"
            onClick={handleStoreClick}
          ></Button>
        </header>
      </div>
    );
}


