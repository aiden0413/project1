import React from "react";

import Button from './Button';

function Toolbar({sign, onSign }) {
    console.log(sign.makenewEditor);
    if(sign.makenewEditor === true){
        return (
            <div className="flex flex-row flex-grow-0 gap-6 justify-start py-6 px-6 border border-gray-300 relative">
                <Button 
                    text="저장" 
                />
                <Button 
                    text="취소"
                    onSign={onSign}
                />
                <Button 
                    text="삭제" 

                />
                <Button
                    text="수정" 
                />
                Toolbar
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
                Toolbar
            </div>
        )}
}

export default Toolbar;