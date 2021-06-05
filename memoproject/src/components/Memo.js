import React from "react";

import Button from './Button';

function Memo({
    title="",
    content="",
    date="",
    onSave,
    onCancel,
    onRemove,
}) {
    return (
        <div className="flex flex-col gap-3 bg-green-400 flex-grow">
            <div className="bg-green-200">{title}</div>
            <div className="bg-green-200 h-300px">{content}</div>
            <div className="bg-green-200">{date}</div>
            <div className="flex flex-row gap-4 justify-center">
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
                />
            </div>
        </div>
    )
}

export default Memo;