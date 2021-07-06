import React from "react";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeMemo, saveMemo } from "../redux/memo";

function Toolbar({
    sign,
    match,
}) {
    const dispatch = useDispatch()

    if(sign === true){
        return (
            <div className="flex flex-row flex-grow-0 gap-6 justify-start py-6 px-6 border border-gray-300 relative">
                <Link to="/">
                    <div className="flex-initial w-full py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600">
                        <button
                            onClick = {() => dispatch(saveMemo(match.params.memoid))}
                        >
                        저장
                        </button>
                    </div>
                </Link>
                <Link to="/">
                    <div className="flex-initial w-full py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600">
                        <button>
                        취소
                        </button>
                    </div>
                </Link>
                <Link to="/">
                    <div className="flex-initial w-full py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600">
                        <button
                            onClick = {() => dispatch(removeMemo(match.params.memoid))}
                        >
                        삭제
                        </button>
                    </div>
                </Link>
            </div>
    )}
    else{
        return (
            <div className="flex flex-row flex-grow-0 gap-6 justify-start py-6 px-6 border border-gray-300 relative">
                <div className="flex-initial w-full py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600">
                    <button>
                    시간순 정렬
                    </button>
                </div>
                <div className="flex-initial w-full py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600">
                    <button>
                    검색
                    </button>
                </div>
            </div>
        )}
}

export default Toolbar;