import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false)

  function handleClick() {
    setExpanded(true)
  }

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    })
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded ?
          <input
            onChange={handleChange}
            name="title"
            value={note.title}
            placeholder="Title"
          /> :
          null}

        <textarea
          onChange={handleChange}
          onClick={handleClick}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
