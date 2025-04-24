import React from 'react'
import { useParams } from 'react-router-dom';
import getNotes from '../Components/getNotes';

const AddModal = () => {

    const {courseName} = useParams();
    const { addNote, formData, setFormData, } = getNotes();

  return (
    <dialog id="add-note-modal" className="modal">
        <div className="dialog-container">
            <form method="dialog">
                <button className="close-button">X</button>
            </form>
            <h3>Add New Note</h3>
            <form onSubmit={addNote}>
                <label htmlFor="Topic">Topic </label>
                <input type="text" placeholder="Enter topic name" maxLength="255" value={formData.topic}
                 onChange={(e) => setFormData({ ...formData, name: courseName, topic: e.target.value })} required />
                <label htmlFor="Image">Image URL</label>
                <input type="text" placeholder="Enter image url" maxLength="255" value={formData.image}
                 onChange={(e) => setFormData({ ...formData, image: e.target.value })} required />
                  
                 <button className="add-note-button">+ Add Note</button>
            </form>
            <form method="dialog">
                <button className="cancel-button">Cancel</button>
            </form>
        </div>
    </dialog>
  )
}

export default AddModal