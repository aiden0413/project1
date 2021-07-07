import React from "react";
import { Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

//import Button from './Button';

function Side() {
    const newid = uuid();

    return (
        <div className="flex-shrink-0 w-200px py-6 px-6 bg-green-400 text-white">
            <Link to={"/memo/"+newid}>
                <div className="flex-initial w-full py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600">
                    새 메모
                </div>
            </Link>
        </div>
    )
}

export default Side;