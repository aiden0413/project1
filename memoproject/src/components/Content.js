import React from "react";

import Toolbar from "./Toolbar";
import Side from "./Side";
import Memos from "./Memos";

function Content() {
    return (
        <div className="flex flex-row flex-grow-0 overflow-auto">
            <Side />
            <div className="flex flex-col flex-grow-0">
                <Toolbar />
                <Memos />
            </div>
        </div>
    )
}

export default Content;