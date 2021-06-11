import React, { memo, useState } from "react";
import { v4 as uuid } from 'uuid';

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function MemoProject() {
    const [data, setData] = useState({
        memolist: [
            {id: uuid(), title: "제목1", content: "내용1", date: "날짜1", editing: false},
            {id: uuid(), title: "제목2", content: "내용2", date: "날짜2", editing: false},
            {id: uuid(), title: "제목3", content: "내용3", date: "날짜3", editing: false}
        ],
    })

    const handleCreate = (memodata) => {
        setData({memolist: [{id: uuid(), ...memodata}].concat(data.memolist)});
    }
    const handleRemove = (id) => {
        setData({memolist: data.memolist.filter(memo => memo.id != id)});
    }
    const handleEdit = (id) => {
        setData({memolist: data.memolist.map(memo => memo.id == id ? {...memo, editing: true} : {...memo, editing: false})});
    }
    const handleCancel = (id) => {
        setData({memolist: data.memolist.map(memo => memo.id == id ? {...memo, editing: false} : memo)});
    }
    const handleSave = (id, update) => {
        setData({memolist: data.memolist.map(memo => memo.id == id ? {id: memo.id, title: update.title, content: update.content, date: update.date, editing: false} : memo)});
    }

    const [sign, setSign] = useState({
        makenewEditor: false,
    })
    
    const handleSign = (boolean) =>{
        setSign({makenewEditor: boolean});
    }
    // console.log(data);
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Content 
                data={data}
                onCreate={handleCreate}
                sign={sign}
                onSign={handleSign}
                onRemove={handleRemove}
                onEdit={handleEdit}
                onSave={handleSave}
                onCancel={handleCancel}
            />
            <Footer />
            
        </div>
    )
}

export default MemoProject;