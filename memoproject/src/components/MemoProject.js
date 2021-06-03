import React from "react";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function MemoProject() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <Content />
            <Footer />
        </div>
    )
}

export default MemoProject;