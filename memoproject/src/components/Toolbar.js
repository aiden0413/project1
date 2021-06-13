import React from "react";
import { Link } from 'react-router-dom';

import Button from './Button';

function Toolbar({
    sign,
    memodata,
    onSave,
    onRemove,
    match,
}) {
    if(sign === true){
        return (
            <div className="flex flex-row flex-grow-0 gap-6 justify-start py-6 px-6 border border-gray-300 relative">
                <Link to="/">
                    <Button 
                        text="저장"
                        btnFunc={onSave}
                        id={match.params.memoid}
                        memodata={memodata}
                    />
                </Link>
                <Link to="/">
                    <Button 
                        text="취소"
                    />
                </Link>
                <Link to="/">
                    <Button 
                        text="삭제" 
                        btnFunc={onRemove}
                        id={match.params.memoid}
                    />
                </Link>
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
            </div>
        )}
}

export default Toolbar;