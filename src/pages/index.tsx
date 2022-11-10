/* eslint-disable @typescript-eslint/naming-convention */

import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

/**
 * App entrypoint
 * @returns {JSX.Element}
 */
export default function App(): JSX.Element {
  const [markdown, setMarkdown] = useState();

  const setData = (e: any) => {
    e.preventDefault();

    setMarkdown(e.target.value);
  };

  return (
    <div className="post-form min-h-screen">
      <div className="h-screen flex flex-col">
        <div className="flex-grow flex-shrink">
          <form className="h-full">
            <div className="flex justify-between h-full">

              <div className="w-1/2">
                <textarea
                  name="md"
                  id="md"
                  placeholder="Markdownで記述"
                  className="markdown-form resize-none w-full h-full border shadow-xl mb-5 rounded-xl focus:outline-none py-4 px-2"
                  value={markdown}
                  onChange={setData}
                ></textarea>
              </div>

              <div className="w-1/2">
                <div className="markdown-preview h-full w-full border shadow-xl mb-5 rounded-xl py-4 px-2 bg-white">
                  <ReactMarkdown unwrapDisallowed={false}>
                    {markdown}
                  </ReactMarkdown>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
