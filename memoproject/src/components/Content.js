import React from "react";

import Toolbar from "./Toolbar";
import Side from "./Side";
import Memos from "./Memos";

function Content({ 
    data,
    sign,
    onCreate,
    onRemove,
    onEdit,
    onSave,
    onCancel,
    onSign,
 }) {
    return (
        <div className="flex flex-row flex-grow overflow-auto">
            <Side 
                onCreate={onCreate}
                onSign={onSign}
            />
            <div className="flex flex-col flex-grow">
                <Toolbar
                    sign={sign}
                    onSign={onSign}
                />
                <Memos 
                    data={data}
                    onRemove={onRemove}
                    onEdit={onEdit}
                    onSave={onSave}
                    onCancel={onCancel}
                    sign={sign}
                    onSign={onSign}
                />
            </div>
        </div>
    )
}

export default Content;