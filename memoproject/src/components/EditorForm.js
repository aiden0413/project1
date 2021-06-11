import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

function EditorForm({ 
  match,
  data,
 }) {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [state, setState] = useState(data.memolist.find(memo => memo.id === match.params.memoid));

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };
  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  }

  return (
    <div className="m-3"> 
      <input
        className="outline-none"
        name="title"
        placeholder="제목"
        onChange={handleChange}
      />
      <div className="border-b border-gray-300 m-3"/>
      <Editor
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }} 
        placeholder="내용을 작성해주세요."
        localization={{
          locale: 'ko',
        }}
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default EditorForm;