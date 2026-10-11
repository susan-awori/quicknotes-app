# QuickNotes

QuickNotes is a small note-taking web app built with plain HTML, CSS and JavaScript. You can write short notes (up to 200 characters), file them under Personal, Work or Study, search through them and delete the ones you no longer need. Your notes are saved in the browser with localStorage, so they are still there after you refresh the page.

## Features

- Add notes with a category (Personal, Work or Study)
- Each note is shown as a card with its text, category label, date/time and a Delete button
- Colour-coded cards: a different left border and label colour for each category
- Validation: empty notes and notes over 200 characters show an error message
- Delete any single note
- Live search that ignores upper/lower case, with a "No notes match your search." message
- Note counter: "You have no notes yet.", "You have 1 note." or "You have N notes."
- Notes saved to and loaded from localStorage
- Responsive layout: the form stacks vertically on screens 600px wide or narrower
- Bonus: "Clear all" button with a confirmation dialog

## How to run locally

1. Clone the repository:
   ```
   git clone https://github.com/susan-awori/quicknotes-app.git
   ```
2. Open the `quicknotes-app` folder.
3. Double-click `index.html` to open it in your browser. No installation or server is needed.

## What I learned

- How to build a page with semantic HTML (`header`, `main`, `section`, `footer`) and link every `label` to its `input` with `for` and `id`.
- How to use Flexbox for the form and a `@media (max-width: 600px)` rule to make the layout work on small screens.
- How to keep data in an array of objects and write a `render()` function that rebuilds the list with `createElement` and `textContent`, which keeps user text safe from HTML injection.
- How to save and load data with `localStorage`, `JSON.stringify` and `JSON.parse`, including handling bad or missing data.
- How to write small, clear Git commits after each step of a project.

