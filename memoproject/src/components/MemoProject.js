import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { initMemo } from "../redux/memo";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import { firestore } from "../firebase";

function MemoProject() {
    const dispatch = useDispatch()
    const data = useSelector(state => state)

    useEffect(()=>{
        firestore.collection("data").doc("memolist").get().then((doc)=>{
            const dbdata = {memolist: doc.data().memolist.map(memo => ({
                id: memo.id,
                title: memo.title,
                content: memo.content,
                date: memo.date,
                weather: memo.weather
            }))};
            dispatch(initMemo(dbdata))
        });
    },  [dispatch])

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        const dbdata = {memolist: data.memolist.map(memo => ({
            id: memo.id,
            title: memo.title,
            content: memo.content,
            date: memo.date,
            weather: memo.weather
        }))};
        firestore.collection("data").doc("memolist").set({memolist : dbdata.memolist});
    },  [dispatch, data])

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