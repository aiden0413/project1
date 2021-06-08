import React from "react";

import Button from './Button';

function Toolbar({
    /*onRemove,
    onEdit,
    onCancel,
    onSave,*/
}) {
    return (
        <div className="flex flex-row flex-grow-0 gap-6 justify-start py-6 px-6 border border-gray-300 relative">
            {/*<Button 
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
            <Button
                text="수정" 
                btnFunc={onEdit}
            />*/}
            Toolbar
        </div>
    )
}

export default Toolbar;