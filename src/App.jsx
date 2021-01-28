import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  if (notes.length === 0) {
    for (var i = 0; i < 3; i++) {
      var people = ["Suzie", "Jimmy", "Sal"];
      var places = ["school", "daycare", "work"];
      addNote({
        title: "Note " + (i + 1),
        content: "Pickup " + people[i] + " from " + places[i] + ".",
      });
    }
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div style={{ padding: "0 1rem" }}>
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
