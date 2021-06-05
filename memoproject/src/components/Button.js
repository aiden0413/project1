import React from "react";

function Button({
    text = "button",
    onclick = ""
}) {
    let handleOnClick;
    if({text}=="새 메모"){
        handleOnClick = () =>{
            
        }
    }
    else if({text}=="저장"){

    }
    else if({text}=="취소"){

    }
    else if({text}=="삭제"){

    }
    else if({text}=="수정"){

    }
    return (
        <div className="flex-initial py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600">
            <button
                onClick=""
            >
                {text}
            </button>
        </div>
    )
}

export default Button;