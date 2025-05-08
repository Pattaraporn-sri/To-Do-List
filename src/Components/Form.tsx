import { useState } from "react";

type InputFormProps = {
    handleAdd : (name: string) => void;
  };

function Form({handleAdd}: InputFormProps){
    const [name, setName] = useState<string>("");

  return(
    <div className="app-box-input">
          <div className="set">
            <div className="icon">
              <img src="https://www.thaimediafund.or.th/wp-content/uploads/2024/07/default-avatar-profile-icon-.jpg"></img>
            </div>
            <div className="app-textbox"> 
              <input
                className="app-textinput"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
                placeholder="Enter artist name"
              ></input>
            </div>
          </div>

          <div className="app-btton-add">
            <button className="app-onClick-add" onClick={() => {handleAdd(name) ;setName("")}}>
              Add
            </button>
          </div>

        </div>
  )
};

export default Form;