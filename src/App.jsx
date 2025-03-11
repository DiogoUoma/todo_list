import { useState } from "react";
import "./App.css";
import "./styles/input.css";
import "./styles/card.css";
import logo from "./assets/logo.png";
import plus from "./assets/plus.png";
import trashCan from "./assets/trash_can_icon.png";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleSubmit() {
    if (inputValue.trim() !== "") {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  }

  function handleDeleteTask(index) {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  }

  return (
    <div className="main">
      <header>
        <img src={logo} alt="logo do site" className="logo" />
      </header>

      <div className="input_container">
        <input
          type="text"
          className="input_todo"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btnAdd" onClick={handleSubmit}>
          <img src={plus} alt="botão de adicionar" className="plusImg" />
        </button>
      </div>

      <div className="card_container">
        {tasks.map((task, index) => (
          <div key={index} className="card">
            <h1>{task}</h1>
            <button
              onClick={() => handleDeleteTask(index)}
              className="trashImg"
            >
              <img src={trashCan} alt="lixeira" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
