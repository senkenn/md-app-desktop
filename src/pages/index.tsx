/* eslint-disable @typescript-eslint/naming-convention */

import { ChangeEventHandler, useState } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * App entrypoint
 * @returns {JSX.Element}
 */
export default function App(): JSX.Element {
  const [markdown, setMarkdown] = useState('');

  const setData: ChangeEventHandler<HTMLTextAreaElement> = (event): void => {
    event.preventDefault();

    setMarkdown(event.target.value);
  };

  return (
    <div className="h-screen flex">

      <div className="w-1/2 flex items-center">
        <textarea
          placeholder="Markdownで記述"
          className="resize-none w-full h-5/6 border rounded-xl focus:outline-none"
          value={markdown}
          onChange={setData}
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
