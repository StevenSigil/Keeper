import React, { useState } from "react";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  const [isExpanded, setExpanded] = useState(false);

  return (
    <div
      className="creat-note-outer"
      onMouseLeave={() => setExpanded(false)}
      onMouseEnter={() => setExpanded(true)}
    >
      <form className="create-note">
        {isExpanded && (
          <Zoom in={isExpanded}>
            <input
              hidden={!isExpanded}
              name="title"
              onChange={handleChange}
              value={note.title}
              placeholder="Title"
              autoComplete="off"
            />
          </Zoom>
        )}

        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? "3" : "1"}
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
