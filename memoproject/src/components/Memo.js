import React, { useState } from "react";

import Button from './Button';

function Memo({
    id="",
    title="",
    content="",
    date="",
    editing="",
    onSave,
    onEdit,
    onRemove,
    onCancel,
}) {
    const [state, setState] = useState({title: title, content: content, date: date})
    
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    if(editing){
        return (
            <div className="flex flex-col gap-3 bg-green-400 flex-grow p-3">
                <input
                        value={state.title}
                        name="title"
                        placeholder="제목"
                        onChange={handleChange}
                />
                <textarea 
                        className="resize-none h-300px"
                        value={state.content}
                        name="content"
                        placeholder="내용"
                        onChange={handleChange}
                />
                <div className="bg-green-200">{date}</div>
                <div className="flex flex-row justify-around">
                    <Button 
                        text="저장"
                        btnFunc={onSave}
                        id={id}
                        data={state}
                    />
                    <Button 
                        text="취소"
                        btnFunc={onCancel}
                        id={id}
                    />
                    <Button 
                        text="삭제" 
                        btnFunc={onRemove}
                        id={id}
                    />
                </div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3 bg-green-400 p-3"
            onClick={() => {onEdit(id)}}
        >
            <div className="bg-green-200">{title}</div>
            <div className="bg-green-200 h-300px">{content}</div>
            <div className="bg-green-200">{date}</div>
            {/*<div className="flex flex-row gap-4 justify-center">
                <Button 
                    className="f"
                    text="저장"
                    btnFunc={onSave}
                />
                <Button 
                    text="취소"
                    btnFunc={onCancel}
                />
                <Button 
                    text="삭제" 
                    btnFunc={onRemove}
                    id={id}
                />
            </div>*/}
        </div>
    )
}

export default Memo;