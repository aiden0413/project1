import React, { useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, RichUtils, convertToRaw } from 'draft-js';

function EditorForm({ 
  match,
  data,
 }) {
  const today = new Date();
  
  const [editorState_content, setEditorState_content] = useState(data.memolist.some(memo => memo.id === match.params.memoid)?
  data.memolist.find(memo => memo.id === match.params.memoid).content : EditorState.createEmpty()
);
  const [editorState_title, setEditorState_title] = useState(data.memolist.some(memo => memo.id === match.params.memoid)?
  data.memolist.find(memo => memo.id === match.params.memoid).title : EditorState.createEmpty()
);
  
  const saveTitle = (title) =>{
    window.localStorage.setItem('title',JSON.stringify(convertToRaw(title)));
  }

  const saveContent = (content) => {
    window.localStorage.setItem('content', JSON.stringify(convertToRaw(content)));
  }

  const onTitleStateChange = (editorState_title) =>{
    const titleState = editorState_title.getCurrentContent();
    saveTitle(titleState);
    setEditorState_title(editorState_title);
  }

  const onEditorStateChange = (editorState_content) => {
    const contentState = editorState_content.getCurrentContent();
    saveContent(contentState);
    setEditorState_content(editorState_content);
  };
  
  const handleKeyCommand = (command) => {

    const newState = RichUtils.handleKeyCommand(editorState_content, command);

    if(newState){
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }
  

  return (
    <div className="m-3"> 
      <Editor
      toolbarHidden
      placeholder="제목을 적어주세요."
      loclization={{
        local: 'ko',
      }}
      editorState={editorState_title}
      onEditorStateChange={onTitleStateChange}
      />
      <div className="border-b border-gray-300 m-3"/>
      <Editor
        toolbar={{
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: false },
        }} 
        placeholder="무엇을 남길까요?"
        localization={{
          locale: 'ko',
        }}
        handleKeyCommand={handleKeyCommand}
        editorState={editorState_content}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default EditorForm;