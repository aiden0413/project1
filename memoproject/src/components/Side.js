import React from "react";
import { Route, Link } from 'react-router-dom';
import { v4 as uuid } from 'uuid';

import Button from './Button';

function Side({ onCreate }) {
    return (
        <div className="flex-shrink-0 w-200px py-6 px-6 bg-green-400 text-white">
            <Link to="/memo/">
                <Button
                    text="새 메모"
                    onCreate={onCreate}
                    btnFunc={onCreate}
                />
            </Link>
        </div>
    )
}

export default Side;