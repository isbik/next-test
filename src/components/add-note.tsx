import React, { useState } from "react";
import "@/styles/add-note.scss";

export const AddNote = ({ closeWindow, addNote }) => {
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="add-note" onClick={onClose}>
      <div className="add-note__wrapper" onClick={(e) => e.stopPropagation()}>
        <button className="btn add-note__btn-close" onClick={onClose}>
          <i className="icon icon--close"></i>
        </button>
        <input
          className="field"
          type="text"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="add-note__field-text field"
          onChange={(e) => setText(e.target.value)}
          placeholder="Напишите комментарий..."
        />
        {isEmpty ? (
          <span className="add-note__notification">
            Ёу, типок, фантазия закончилась ?!
          </span>
        ) : null}
        <button className="btn add-note__btn-add" onClick={onAdd}>
          <i className="icon icon--plus"></i>
          Добавить заметку
        </button>
      </div>
    </div>
  );

  function onClose() {
    closeWindow();
  }
  function onAdd() {
    if (title || text) {
      addNote({
        title,
        text,
        id: Date.now(),
      });
      closeWindow();
    } else {
      setIsEmpty(true);
      setTimeout(() => {
        setIsEmpty(false);
      }, 2000);
    }
  }
};
