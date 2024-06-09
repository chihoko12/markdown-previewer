import React from 'react';
import '../styles.css';

const Toolbar = ({ title }) => (
  <div className='toolbar'>
    <i className='fa fa-free-code-camp' title="no-stack-dub-sack" />
    {title}
    <i class="fa fa-arrows-alt" />
  </div>
);

export default Toolbar;
