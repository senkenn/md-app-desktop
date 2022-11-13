/* eslint-disable @typescript-eslint/naming-convention */

import { marked } from 'marked';
import { useState } from 'react';

import { Editor } from '../components/Editor';

/**
 * App entrypoint
 * @returns {JSX.Element}
 */
export default function App(): JSX.Element {
  const [markdown, setMarkdown] = useState('');

  console.log(marked(markdown));
  return (
    <div className="h-screen flex">

      <div className="w-1/2 flex items-center">
        <Editor
          setMarkdown={setMarkdown}
        />
      </div>

      <div className="w-1/2 flex items-center">
        <div className="h-5/6 w-full border rounded-xl bg-white align-middle">
          <span dangerouslySetInnerHTML={{ __html: marked(markdown) }}/>
        </div>
      </div>

    </div>
  );
}
