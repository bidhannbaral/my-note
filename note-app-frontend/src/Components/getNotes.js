import { create } from 'zustand'
import axios from 'axios'
import { toast } from 'react-hot-toast';

const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:3000' : '';

const getNotes = create ((set, get) => ({
    notes: [],
    loading: false,
    error: null,

    formData: {
        name: "",
        topic: "",
        image: "",
    },

    setFormData: (formData) => set({ formData }),
    resetForm: () => set({ formData: {name: "", topic: "", image: ""}}),

    addNote: async (e) => {
        try {
            set ({ loading: true });
            const { formData } = get();
            await axios.post(`${BASE_URL}/api/courses`, formData);
            await get().fetchNotes();
            get().resetForm();
            toast.success('Note added successfully');
            document.getElementById("add-note-modal").close();
        } catch (error) {
            console.log('Error in addNote', error);
        } finally {
            set ({ loading: false });
        }
    },

    fetchNotes: async () => {
        try {
            set ({ loading: true });
            const response = await axios.get(`${BASE_URL}/api/courses`);
            set ({ notes: response.data.data, error: null });

        } catch (error) {
            console.log('Error fetching notes' + error);
            set({ error: 'Something went wrong', notes: null} );
        } finally {
            set ({ loading: false });
        }
    }

}));

export default getNotes;