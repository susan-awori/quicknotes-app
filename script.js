const form = document.querySelector('#note-form');
const noteInput = document.querySelector('#note-input');
const categorySelect = document.querySelector('#note-category');
const searchInput = document.querySelector('#search-input');
const notesList = document.querySelector('#notes-list');
const noteCount = document.querySelector('#note-count');
const errorMessage = document.querySelector('#error-message');
const clearAllBtn = document.querySelector('#clear-all');

const MAX_LENGTH = 200;
const STORAGE_KEY = 'quicknotes-notes';
const CATEGORIES = ['Personal', 'Work', 'Study'];

function loadNotes() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
      return [];
    }
    const parsed = JSON.parse(saved);
    if (!Array.isArray(parsed)) {
      return [];
    }
    return parsed.filter(function (n) {
      return n && typeof n.text === 'string' && CATEGORIES.includes(n.category);
    });
  } catch (error) {
    return [];
  }
}

function saveNotes() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  } catch (error) {
    errorMessage.textContent = 'Could not save notes in this browser.';
  }
}

let notes = loadNotes();

function updateCount() {
  if (notes.length === 0) {
    noteCount.textContent = 'You have no notes yet.';
  } else if (notes.length === 1) {
    noteCount.textContent = 'You have 1 note.';
  } else {
    noteCount.textContent = 'You have ' + notes.length + ' notes.';
  }
}

function deleteNote(id) {
  notes = notes.filter(function (note) {
    return note.id !== id;
  });
  saveNotes();
  render();
}

function createNoteCard(note) {
  const li = document.createElement('li');
  li.classList.add('note-card', 'category-' + note.category.toLowerCase());

  const text = document.createElement('p');
  text.classList.add('note-text');
  text.textContent = note.text;

  const meta = document.createElement('div');
  meta.classList.add('note-meta');

  const label = document.createElement('span');
  label.classList.add('category-label');
  label.textContent = note.category;

  const date = document.createElement('span');
  date.classList.add('note-date');
  date.textContent = note.createdAt;

  const deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.classList.add('btn', 'btn-danger');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', function () {
    deleteNote(note.id);
  });

  meta.append(label, date, deleteBtn);
  li.append(text, meta);
  return li;
}


