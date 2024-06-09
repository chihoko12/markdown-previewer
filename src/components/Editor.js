import React from 'react';
import Toolbar from "./Toolbar";
import '../styles.css';

const Editor = ({ markdown, onChange }) => (
  <div className='editorWrap'>
    <Toolbar title="Editor" />
<textarea
  id="editor"
  type="text"
  value={markdown}
  onChange={onChange}
  />
  </div>
);

export default Editor;
