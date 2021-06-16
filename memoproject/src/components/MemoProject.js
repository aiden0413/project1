import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom';
import { EditorState, ContentState } from 'draft-js';

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import { firestore } from "../firebase";

function MemoProject() {
    const [data, setData] = useState({
        memolist: [
            {
                id: uuid(), 
                title: EditorState.createWithContent(ContentState.createFromText('제목1')), 
                content: EditorState.createWithContent(ContentState.createFromText('내용1')),
                date: "2021-01-01"
            },
            {
                id: uuid(), 
                title: EditorState.createWithContent(ContentState.createFromText('제목2')),
                content: EditorState.createWithContent(ContentState.createFromText('내용2')),
                date: "2021-01-02"
            },
        ]
    })

    /*var docRef = db.collection("data").doc("memolist");

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });*/


    const handleRemove = (id) => {
        setData({memolist: data.memolist.filter(memo => memo.id !== id)});
    }
    const handleSave = (id, update) => {
        if(data.memolist.some(memo => memo.id == id)){
            setData({memolist: data.memolist.map(memo => memo.id == id ? {id: memo.id, title: update.title, content: update.content, date: update.date, title_json:update.title_json, content_json:update.title_json} : memo)});
        }
        else{
            setData({memolist: [{id: id, title: update.title, content: update.content, date: update.date, title_json:update.title_json, content_json:update.title_json}].concat(data.memolist)});
        }
        firestore.collection("data").doc("memolist").update({db : "test"})
    }

    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Header />
                <Content 
                    data={data}
                    onRemove={handleRemove}
                    onSave={handleSave}
                />
                <Footer />     
            </div>
        </Router>
    )
}

export default MemoProject;