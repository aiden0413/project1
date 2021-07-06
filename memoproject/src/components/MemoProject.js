import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import { firestore } from "../firebase";

function MemoProject() {

    const [data, setData] = useState({});

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
        //dbRead();
    },  [])

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        //dbSave();
    },  [data])

    return (
        <Router>
            <div className="flex flex-col h-screen">
                <Header />
                <Content />
                <Footer />     
            </div>
        </Router>
    )
}

export default MemoProject;