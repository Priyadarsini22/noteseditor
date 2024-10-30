import React, { useEffect } from 'react';

const NoteEditor = () => {
  useEffect(() => {
    const textarea = document.getElementById('note-content');

    const adjustHeight = () => {
      textarea.style.height = 'auto'; // Reset height to adjust based on content
      textarea.style.height = `${textarea.scrollHeight}px`; // Set new height
    };

    textarea.addEventListener('input', adjustHeight);

    // Initial adjustment
    adjustHeight();

    return () => {
      textarea.removeEventListener('input', adjustHeight);
    };
  }, []);

  return (
    <section className="note-editor">
      <textarea id="note-content" placeholder="Write your note here..."></textarea>
    </section>
  );
};

export default NoteEditor;
