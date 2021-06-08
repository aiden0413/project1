import React, { useState } from "react";
import { v4 as uuid } from 'uuid';

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function MemoProject() {
    const [data, setData] = useState({
        memolist: [
            {id: uuid(), title: "제목1", content: "내용1", date: "날짜1"},
            {id: uuid(), title: "제목2", content: "내용2", date: "날짜2"},
            {id: uuid(), title: "제목3", content: "내용3", date: "날짜3"}
        ],
    })

    const handleCreate = (memodata) => {
        setData({memolist: [{id: uuid(), ...memodata}].concat(data.memolist)});
    }
    const handleRemove = (id) => {
        setData({memolist: data.memolist.filter(memo => memo.id != id)});
    }
    const handleEdit = (id) => {

    }
    const handleCancel =(id) => {

    }
    const handleSave = (id) => {

    }

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Content 
                data={data}
                onCreate={handleCreate}
                onRemove={handleRemove}
                onEdit={handleEdit}
                onCancel={handleCancel}
                onSave={handleSave}
            />
            <Footer />
        </div>
    )
}

export default MemoProject;