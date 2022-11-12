import React, { Dispatch, SetStateAction } from 'react';

type EditorProps = {
  markdown: string
  setMarkdown: Dispatch<SetStateAction<string>>
}

/**
 * Editor
 *
 * @returns {JSX.Element}
 */
export const Editor = (props: EditorProps): JSX.Element => {

  return (
    <textarea
      placeholder="Write with Markdown"
      className="resize-none w-full h-5/6 border rounded-xl focus:outline-none"
      value={props.markdown}
      onChange={(event) => props.setMarkdown(event.target.value)}
    />
  );
};
