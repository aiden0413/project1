import React, { memo, useState } from "react";
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function MemoProject() {
    const [data, setData] = useState({
        memolist: [{
            id: uuid(), 
            title: "메모를 작성해보세요", 
            content: "클릭", 
            date: "2021-01-01",
            title_json: null,
            content_json: null,
            },
        ],
    })

    const handleCreate = (memodata) => {
        setData({memolist: [{id: uuid(), ...memodata}].concat(data.memolist)});
    }
    const handleRemove = (id) => {
        setData({memolist: data.memolist.filter(memo => memo.id != id)});
    }
    const handleEdit = (id) => {
        setData({memolist: data.memolist.map(memo => memo.id == id ? {...memo} : {...memo, editing: false})});
    }
    const handleSave = (id, update) => {
        if(data.memolist.some(memo => memo.id == id)){
            setData({memolist: data.memolist.map(memo => memo.id == id ? {id: memo.id, title: update.title, content: update.content, date: update.date, title_json:update.title_json, content_json:update.title_json} : memo)});
        }
        else{
            setData({memolist: [{id: id, title: update.title, content: update.content, date: update.date, title_json:update.title_json, content_json:update.title_json}].concat(data.memolist)});
        }
    }

    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Header />
                <Content 
                    data={data}
                    onCreate={handleCreate}
                    onRemove={handleRemove}
                    onEdit={handleEdit}
                    onSave={handleSave}
                />
                <Footer />     
            </div>
        </Router>
    )
}

export default MemoProject;