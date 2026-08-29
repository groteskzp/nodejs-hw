import createHttpError from 'http-errors';
import * as notesServices from '../services/notesServices.js';

export const getAllNotes = async (req, res) => {
  const { page, perPage, tag, search } = req.query;
  const result = await notesServices.getAllNotes({
    page,
    perPage,
    tag,
    search,
  });

  res.status(200).json(result);
};

export const getNoteById = async (req, res) => {
  const { noteId } = req.params;
  const note = await notesServices.getNoteById(noteId);

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};

export const createNote = async (req, res) => {
  const note = await notesServices.createNote(req.body);
  res.status(201).json(note);
};

export const deleteNote = async (req, res) => {
  const { noteId } = req.params;
  const note = await notesServices.deleteNote(noteId);

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};

export const updateNote = async (req, res) => {
  const { noteId } = req.params;
  const note = await notesServices.updateNote(noteId, req.body);

  if (!note) {
    throw createHttpError(404, 'Note not found');
  }

  res.status(200).json(note);
};
