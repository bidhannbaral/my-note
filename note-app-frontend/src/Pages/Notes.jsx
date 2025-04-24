import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getNotes from '../Components/getNotes';
import Loading from '../Components/Loading';
import AddModal from '../Components/AddModal';

const Notes = () => {

  const { notes, fetchNotes, loading } = getNotes();
  const {courseName} = useParams();

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const newNotes = notes.filter((note) => note.name.toLowerCase() === courseName.toLowerCase());
  
  return (
    <div>
      <div className="notes-title">
        <h2>Notes for {courseName}:</h2>
      </div>
      <div className="add-button">
        <button onClick={() => document.getElementById("add-note-modal").showModal()}>Add Note</button>
      </div>
        <div className="notes-wrapper">
          {loading ? (<Loading />) : (
            (newNotes && newNotes.length) > 0 ? (
              newNotes.map((note, index) => (
                <div key={index} className="note-card">
                  <h3 className="note-topic">{note.topic}</h3>
                  <img className="notes-image" src={note.image} alt={note.topic} />
                  <p className="note-date">Posted on: {new Date(note.created_at).toLocaleDateString()}</p>
                </div>
              ))
            ) : (
              <div className="no-notes">
                <p>No notes yet for this course.</p>
              </div>
            )
          )}
        </div>
        <AddModal />
    </div>
  )
}

export default Notes;