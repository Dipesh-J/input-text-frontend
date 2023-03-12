import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, FloatingLabel, Form } from "react-bootstrap";

function App() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleStoreClick = async () => {
    try {
      const response = await fetch(
        "https://input-box-backend-cysa0yubp-dipesh-j.vercel.app/addText",
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
        alert("You message is safe with us (⌐■_■) ");
        console.log(data);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 className="heading">Something to say?</h3>
        <FloatingLabel
          controlId="floatingTextarea"
          // label="Comments"
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

        {/* <form
        onSubmit={handleStoreClick}
        >
          <FloatingLabel
            controlId="floatingTextarea"
            className="mb-3"
            aria-label="Leave a comment"
            aria-labelledby="comment-label"
            onChange={handleTextChange}
          >
            <Form.Control
              size="lg"
              as="textarea"
              placeholder="You can write something here"
              defaultValue={text}
              aria-label="Comment"
              aria-labelledby="comment-label"
            />
          </FloatingLabel>
          <Button
            as="input"
            type="submit"
            value="Submit"
            variant="outline-success"
            aria-label="Submit comment"
          ></Button>
        </form> */}
      </header>
    </div>
  );
}

export default App;
