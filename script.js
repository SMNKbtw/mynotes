document.addEventListener('DOMContentLoaded', (event) => {
    const noteInput = document.getElementById('noteInput');
    const notesList = document.getElementById('notesList');
    const saveButton = document.querySelector('button');
    const emptyNotesText = document.getElementById('emptyNotesText');

    const saveNote = () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            const listItem = document.createElement('li');
            listItem.textContent = noteText;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.style.padding = '8px';
            deleteButton.addEventListener('click', () => {
                notesList.removeChild(listItem);
                if (notesList.children.length === 0) {
                    emptyNotesText.style.display = 'block';
                }
            });

            listItem.appendChild(deleteButton);
            notesList.insertBefore(listItem, notesList.firstChild);
            noteInput.value = '';
            emptyNotesText.style.display = 'none';
        }
    };

    saveButton.addEventListener('click', saveNote);

    noteInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            saveNote();
        }
    });
});
