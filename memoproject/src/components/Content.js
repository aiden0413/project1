import React from "react";

import Toolbar from "./Toolbar";
import Side from "./Side";
import Memos from "./Memos";
import EditorForm from "./EditorForm";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Content({ 
    data,
    onCreate,
    onRemove,
    onEdit,
    onSave,
    onCancel,
 }) {
    const sign = false;
    return (
        <div className="flex flex-row flex-grow overflow-auto">
            <Side/>
            <div className="flex flex-col flex-grow">
                <Switch>
                    <Route exact path="/"
                        render={() => (
                        <div>
                            <Toolbar
                                sign={false}
                                onCreate={onCreate}
                            />
                            <Memos 
                                data={data}
                                onRemove={onRemove}
                                onEdit={onEdit}
                                onSave={onSave}
                                onCancel={onCancel}
                            />
                        </div>
                        )}
                    />
                    <Route path="/editor" 
                        render={() => (
                            <div>
                                <Toolbar
                                    sign={true}
                                    onCreate={onCreate}
                                />
                                <EditorForm/>
                            </div>
                        )}
                    />
                </Switch>
            </div>
        </div>
    )
}

export default Content;