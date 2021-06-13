import React, { useState, useEffect } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState, RichUtils, convertToRaw } from 'draft-js';

function EditorForm({ 
  match,
  data,
  setMemoContent,
 }) {
  const [state, setState] = useState(data.memolist.find(memo => memo.id === match.params.memoid));
  const [editorState_title, setEditorState_title] = useState(EditorState.createEmpty());
  
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

  const [editorState, setEditorState] = useState(state.content);

  const today = new Date();

  const onEditorStateChange = (editorState) => {
    const contentState = editorState.getCurrentContent();
    saveContent(contentState);
    setEditorState(editorState);
    setState({...state, content: editorState, date: today.toLocaleString()});
  };


  useEffect(() => {
    setMemoContent(state);
  }, [state]);
  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value, date: today.toLocaleString()});
  }
  
  const handleKeyCommand = (command) => {

    const newState = RichUtils.handleKeyCommand(editorState, command);

    if(newState){
      this.onChange(newState);
      return 'handled';
    }

    return 'not-handled';
  }
  
  
  

  return (
    <div className="m-3"> 
      <input
        className="outline-none"
        name="title"
        placeholder="제목"
        value={state.title}
        onChange={handleChange}
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
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default EditorForm;