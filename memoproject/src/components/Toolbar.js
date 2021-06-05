import React from "react";

import Button from './Button';

function Toolbar() {
    return (
        <div className="flex flex-row flex-grow-0 gap-6 justify-start py-6 px-6 border border-gray-300 relative">
            <Button text="저장" />
            <Button text="취소" />
            <Button text="삭제" />
            <Button text="수정" />
            Toolbar
        </div>
    )
}

export default Toolbar;