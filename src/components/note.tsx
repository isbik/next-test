import React from "react";
import "@/styles/note.scss";

type NoteProps = {
  title: string;
  text: string;
  id: number;
  deleteNote: any;
};

export const Note = ({ title, text, id, deleteNote }: NoteProps) => {
  return (
    <div className="note">
      <div className="note__top">
        <h4 className="note__title">{title}</h4>
        <button className="btn note__btn-edit">
          <i className="icon icon--edit"></i>
          Редактировать
        </button>
        <button className="btn note__btn-delete">
          <i className="icon icon--trash"></i>
          Удалить
        </button>
      </div>
      <p className="note__text">{text}</p>
    </div>
  );

  function onDelete() {
    deleteNote(id);
  }
};
