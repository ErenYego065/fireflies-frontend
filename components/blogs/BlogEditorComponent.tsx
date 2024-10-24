"use client"

import { useState } from "react";
import { EditorState } from "draft-js";
import { stateToHTML } from "draft-js-export-html";
import { stateFromHTML } from "draft-js-import-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((module) => module.Editor),
  {
    ssr: false,
  }
);

const BlogEditor = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleChange = (newState: any) => {
    setEditorState(newState);
  };

  return (
    <div>
      <Editor editorState={editorState} onEditorStateChange={handleChange} />
    </div>
  );
};

export default BlogEditor;
