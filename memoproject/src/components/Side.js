import React from "react";
import { Route, Link } from 'react-router-dom';

import Button from './Button';

function Side({ onCreate, onSign }) {
    return (
        <div className="flex-shrink-0 w-200px py-6 px-6 bg-green-400 text-white">
            <Link to="/editor">
                <Button
                    text="새 메모"
                    onCreate={onCreate}
                    onSign={onSign}
                    btnFunc={onCreate}
                />
            </Link>
        </div>
    )
}

export default Side;