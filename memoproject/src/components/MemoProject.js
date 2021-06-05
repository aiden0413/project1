import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function MemoProject() {
    const data = {
        memolist: [
            {title: "제목1", content: "내용1", date: "날짜1"},
            {title: "제목2", content: "내용2", date: "날짜2"},
            {title: "제목3", content: "내용3", date: "날짜3"}
        ],
    }

    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Content data={data} />
            <Footer />
        </div>
    )
}

export default MemoProject;