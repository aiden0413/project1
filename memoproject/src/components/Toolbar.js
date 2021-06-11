import React from "react";
import { Route, Link } from 'react-router-dom';

import Button from './Button';

function Toolbar({
    id="",
    title="",
    content="",
    date="",
    editing="",
    onCreate,
    sign,
    onSign,
    onSave,
    onEdit,
    onRemove,
    onCancel,
}) {
    if(sign === true){
        return (
            <div className="flex flex-row flex-grow-0 gap-6 justify-start py-6 px-6 border border-gray-300 relative">
                <Button 
                    text="저장"
                    btnFunc={onSave}
                    id={id}
                    creatememo={onCreate}
                />
                <Link to="/">
                    <Button 
                        text="취소"
                        onSign={onSign}
                    />
                </Link>
                <Button 
                    text="삭제" 

                />
                <Button
                    text="수정" 
                />
            </div>
    )}
    else{
        return (
            <div className="flex flex-row flex-grow-0 gap-6 justify-start py-6 px-6 border border-gray-300 relative">
                <Button 
                    text="시간순 정렬" 
                />
                <Button 
                    text="검색"
                />
                <Button 
                    text="삭제" 
                />
                <Button
                    text="수정" 
                />
            </div>
        )}
}

export default Toolbar;