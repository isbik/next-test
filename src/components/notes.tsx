import React, { useEffect, useState } from "react";
import { Note } from "@/components/note";
import { AddNote } from "@/components/add-note";
import "@/styles/notes.scss";

export const Notes = () => {
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [notes, setNotes] = useState<any>([]);

  const text: string =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur id minus sunt voluptatem magni dolorum accusamus magnam eligendi nulla. Optio, officia beatae quisquam illum perspiciatis laboriosam corporis voluptate rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur id minus sunt voluptatem magni dolorum accusamus magnam eligendi nulla. Optio, officia beatae quisquam illum perspiciatis laboriosam corporis voluptate rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur id minus sunt voluptatem magni dolorum accusamus magnam eligendi nulla. Optio, officia beatae quisquam illum perspiciatis laboriosam corporis voluptate rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur id minus sunt voluptatem magni dolorum accusamus magnam eligendi nulla. Optio, officia beatae quisquam illum perspiciatis laboriosam corporis voluptate rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi consequuntur id minus sunt voluptatem magni dolorum accusamus magnam eligendi nulla. Optio, officia beatae quisquam illum perspiciatis laboriosam corporis voluptate rem.";

  useEffect(() => {
    createNotes();    
  }, []);

  return (
    <section className="notes">
      <button className="btn notes__btn-add" onClick={() => setIsAdd(true)}>
        <i className="icon icon--plus"></i>
      </button>
      {isAdd ? <AddNote closeWindow={closeAddNote} addNote={addNote} /> : null}
      {notes.map((note) => (
        <Note
          key={note.id}
          title={note.title}
          text={note.text}
          id={note.id}
          deleteNote={deleteNote}
        />
      ))}
    </section>
  );

  function createNotes() {
    const newNotes = [];
    
    for (let i = 0; i < 10; i++) {
      newNotes.push({
        title: "Note " + (i + 1),
        text: text,
        id: i,
      });
    }

    setNotes(newNotes);
  }

  function addNote(note) {
    setNotes([note, ...notes]);
  }

  function closeAddNote() {
    setIsAdd(false);
  }

  function deleteNote(id) {
    
  }
};
