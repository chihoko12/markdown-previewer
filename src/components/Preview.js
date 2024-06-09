import React from 'react';
import Toolbar from "./Toolbar";
import { marked } from 'marked';
import '../styles.css';

const Preview =({ markdown }) => (
  <div className='previewWrap'>
      <Toolbar title="Previewer" />
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { breaks: true }),
      }}
      />
  </div>
);

export default Preview;
