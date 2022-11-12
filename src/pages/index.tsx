/* eslint-disable @typescript-eslint/naming-convention */

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * App entrypoint
 * @returns {JSX.Element}
 */
export default function App(): JSX.Element {
  const [markdown, setMarkdown] = useState('');

  const setData = (e: any): void => {
    e.preventDefault();

    setMarkdown(e.target.value);
  };

  return (
    <div className="h-screen flex">

      <div className="w-1/2">
        <textarea
          placeholder="Markdownで記述"
          className="resize-none w-full h-full border rounded-xl focus:outline-none block"
          value={markdown}
          onChange={setData}
        ></textarea>
      </div>

      <div className="w-1/2">
        <div className="h-full w-full border rounded-xl bg-white">
          <ReactMarkdown unwrapDisallowed={false}>
            {markdown}
          </ReactMarkdown>
        </div>
      </div>

    </div>
  );
}
