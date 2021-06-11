import React from "react";

import Toolbar from "./Toolbar";
import Side from "./Side";
import Memos from "./Memos";
import EditorForm from "./EditorForm";
import { Route, Switch } from 'react-router-dom';

function Content({ 
    data,
    onRemove,
    onSave,
 }) {
    const sign = false;
    return (
        <div className="flex flex-row flex-grow overflow-auto">
            <Side/>
            <div className="flex flex-col flex-grow">
                <Switch>
                    <Route exact path="/"
                        render={(props) => (
                        <div>
                            <Toolbar
                                sign={false}
                                {...props}
                            />
                            <Memos 
                                data={data}
                                {...props}
                            />
                        </div>
                        )}
                    />
                    <Route path="/memo/:memoid" 
                        render={(props) => (
                            <div>
                                <Toolbar
                                    sign={true}
                                    onRemove={onRemove}
                                    onSave={onSave}
                                    {...props}
                                />
                                <EditorForm
                                    data={data}
                                    {...props}
                                />
                            </div>
                        )}
                    />
                </Switch>
            </div>
        </div>
    )
}

export default Content;