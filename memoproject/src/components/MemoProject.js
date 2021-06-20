import React, { useState, useEffect, useRef } from "react";
import { v4 as uuid } from 'uuid';
import { BrowserRouter as Router } from 'react-router-dom';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import { firestore } from "../firebase";

function MemoProject() {
    const [data, setData] = useState(null);

    const dbRead =() =>{
        firestore.collection("data").doc("memolist").get().then((doc)=>{
            const dbdata = {memolist: doc.data().memolist.map(memo => ({
                id: memo.id,
                title: EditorState.createWithContent(convertFromRaw(JSON.parse(memo.title))),
                content: EditorState.createWithContent(convertFromRaw(JSON.parse(memo.content))),
                date: memo.date,
                weather: memo.weather
            }))};
            setData(dbdata);
        });
    }

    const dbSave = () => {
        const dbdata = {memolist: data.memolist.map(memo => ({
            id: memo.id,
            title: JSON.stringify(convertToRaw(memo.title.getCurrentContent())),
            content: JSON.stringify(convertToRaw(memo.content.getCurrentContent())),
            date: memo.date,
            weather: memo.weather
        }))};
        firestore.collection("data").doc("memolist").set({memolist : dbdata.memolist});
    }

    useEffect(()=>{
        dbRead();
    },  [])

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        dbSave();
    },  [data])

    const handleRemove = (id) => {
        setData({memolist: data.memolist.filter(memo => memo.id !== id)});
    }
    const handleSave = (id, update) => {
        if(data.memolist.some(memo => memo.id === id)){
            setData({memolist: data.memolist.map(memo => memo.id === id ? {id: memo.id, title: update.title, content: update.content, date: update.date, weather: update.weather} : memo)});
        }
        else{
            setData({memolist: [{id: id, title: update.title, content: update.content, date: update.date, weather: update.weather}].concat(data.memolist)});
        }
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