import { Note } from '../models/note.js';

export const getAllNotes = async ({ page, perPage, tag, search }) => {
  const skip = (page - 1) * perPage;
  const notesQuery = Note.find();

  if (search) {
    notesQuery.where({
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { content: { $regex: search, $options: 'i' } },
      ],
    });
  }

  if (tag) {
    notesQuery.where({ tag });
  }

  const [totalNotes, notes] = await Promise.all([
    notesQuery.clone().countDocuments(),
    notesQuery.skip(skip).limit(perPage).exec(),
  ]);

  const totalPages = Math.ceil(totalNotes / perPage);

  return {
    page,
    perPage,
    totalNotes,
    totalPages,
    notes,
  };
};

export const getNoteById = async (noteId) => Note.findById(noteId);

export const createNote = async (payload) => Note.create(payload);

export const deleteNote = async (noteId) => Note.findByIdAndDelete(noteId);

export const updateNote = async (noteId, payload) =>
  Note.findByIdAndUpdate(noteId, payload, {
    returnDocument: 'after',
  });
