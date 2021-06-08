import React, { memo } from "react";

function Button({
    text = "button",
    onCreate,
    onSign
}) {
    const handleOnClick = () => {
        if(text==="새 메모"){
            let newmemo = {title: "new제목", content: "new내용", date: "new날짜"};
            onCreate(newmemo);
            onSign(true);
        }
        else if(text==="저장"){
        }
        else if(text==="취소"){
            onSign(false);
            console.log("이전으로 돌아갑니다.")
            
        }
        else if(text==="삭제"){
    
        }
        else if(text==="수정"){
    
        }
    }
    
    return (
        <div 
            className="flex-initial w-full py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600"
            onClick={handleOnClick}
        >
            {text}
        </div>
    )
}

export default Button;