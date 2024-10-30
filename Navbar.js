import React, { useState } from 'react';

const Navbar = ({ toggleDarkMode }) => {
  const [color, setColor] = useState('#ff0000'); // Default color

  const applyStyle = (command, value) => {
    document.execCommand(command, false, value);
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setColor(newColor);
    applyStyle('foreColor', newColor);
  };

  return (
    <nav className="text-edit-navbar">
      <button onClick={toggleDarkMode} title="Dark/Light Mode">
        Dark/Light Mode
      </button>

      <button onClick={() => applyStyle('bold')} title="Bold">
        <b>B</b>
      </button>
      <button onClick={() => applyStyle('italic')} title="Italic">
        <i>I</i>
      </button>
      <button onClick={() => applyStyle('underline')} title="Underline">
        <u>U</u>
      </button>
      <button onClick={() => applyStyle('justifyLeft')} title="Align Left">
        <span>&#8676;</span>
      </button>
      <button onClick={() => applyStyle('justifyCenter')} title="Align Center">
        <span>—</span>
      </button>
      <button onClick={() => applyStyle('justifyRight')} title="Align Right">
        <span>&#8677;</span>
      </button>
      <button onClick={() => applyStyle('fontSize', '5')} title="Increase Font Size">
        A+
      </button>
      <button onClick={() => applyStyle('fontSize', '2')} title="Decrease Font Size">
        A-
      </button>
      <button title="Font Color">
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          style={{ border: 'none', padding: 0, width: 24, height: 24 }}
        />
      </button>
      <button onClick={() => applyStyle('undo')} title="Undo">
        &#8630;
      </button>
      <button onClick={() => applyStyle('redo')} title="Redo">
        &#8631;
      </button>
    </nav>
  );
};

export default Navbar;
