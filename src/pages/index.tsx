/* eslint-disable @typescript-eslint/naming-convention */

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

import { Editor } from '../components/Editor';

/**
 * App entrypoint
 * @returns {JSX.Element}
 */
export default function App(): JSX.Element {
  const [markdown, setMarkdown] = useState('');

  return (
    <div className="h-screen flex">

      <div className="w-1/2 flex items-center">
        <Editor
          setMarkdown={setMarkdown}
        />
      </div>

      <div className="w-1/2 flex items-center">
        <div className="h-5/6 w-full border rounded-xl bg-white align-middle">
          <ReactMarkdown unwrapDisallowed={false}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>

    </div>
  );
}
