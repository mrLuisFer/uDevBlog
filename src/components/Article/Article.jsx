import React from 'react';
import ReactMarkdown from 'react-markdown';
import {useParams, Link} from 'react-router-dom';

import markdown from './test.md';

export default function Article() {
  console.log(markdown);

  let {id} = useParams();

  return (
    <>
      {parseInt(id) ? (
        <div>
          <ReactMarkdown />
          some {id}
        </div>
      ) : (
        <div>
          <p>No existe el articulo :I</p>
          <Link to='/home'>Vayamos devuelta a casa</Link>
        </div>
      )}
    </>
  );
}
