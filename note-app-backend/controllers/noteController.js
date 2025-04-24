import sql from '../config/db.js';

export const getNotes = async (req, res) => {

    try {
        const notes = await sql`
        SELECT * FROM notes
        ORDER BY created_at DESC
    `;
        console.log('fetched notes', notes);
        res.status(200).json({success: true, data: notes})
    } catch (error) {
        console.log('Error in getNotes' + error);
        res.status(500).json({success: false, message: 'Server Error'});
    }
}

export const getNote = async (req, res) => {
    const { id } = req.params;

    try {
        const notes = await sql`
            SELECT * FROM notes WHERE id=${id}
        `;

        res.status(200).json({ success: true, data: notes[0]});
    } catch (error) {
        console.log('Error in getNote' + error);
        res.status(500).json({success: false, message: 'Server Error'});
    }
}

export const createNote = async (req, res) => {
    const { name, topic, image } = req.body;

    if (!topic || !image || !name) {
        return res.status(400).json({ success: false, message: 'All fields are required!' });
    }

    try {
        const newNote = await sql`
            INSERT INTO notes (name, topic, image)
            VALUES (${name}, ${topic}, ${image})
            RETURNING *
        `;

        console.log('New note created', newNote);
        res.status(201).json({ success: true, data: newNote[0] });
    } catch (error) {
        console.error('Error in createNote:', error);
        res.status(500).json({
            success: false,
            message: 'Database insert failed',
            detail: error.message,
        });
    }

    console.log('req.body:', req.body);
}