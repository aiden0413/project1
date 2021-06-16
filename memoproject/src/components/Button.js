import React, { useState, useEffect } from "react";
import { EditorState, ContentState, convertToRaw, Editor, convertFromRaw} from 'draft-js';
import axios from 'axios';

function Button({
    text = "button",
    btnFunc,
    id="",
    data,
}) {
    const [state, setState] = useState({ temp: 0, desc: '', icon: '', loading: true })
    
    const handleOnClick = () => {
        if(text==="새 메모"){

        }
        else if(text==="저장"){
            const today = new Date();

            let title_JSON;
            const title_string = window.localStorage.getItem('title');
                title_JSON = EditorState.createWithContent(convertFromRaw(JSON.parse(title_string)));
            if(convertToRaw(title_JSON.getCurrentContent()).blocks[0].text === ""){
                title_JSON = EditorState.createWithContent(ContentState.createFromText("제목"));
            }

            let content_JSON;
            const content_string = window.localStorage.getItem('title');
                content_JSON = EditorState.createWithContent(convertFromRaw(JSON.parse(content_string)));
            if(convertToRaw(content_JSON.getCurrentContent()).blocks[0].text === ""){
                title_JSON = EditorState.createWithContent(ContentState.createFromText("제목"));
            }
            
            const update = {...data, title: title_JSON, content: content_JSON, date: today.toLocaleString(), weather: state};

            btnFunc(id, update);
            window.localStorage.clear();
        }
        else if(text==="취소"){

        }
        else if(text==="삭제"){
            btnFunc(id);
        }
    }

    useEffect(()=>{
        const cityName = 'Seoul';
        const apiKey = '084c3808739f5624eb95f1489adf9c0a';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

        axios.get(url)
            .then(responseData => {
                console.log(responseData);
                const data = responseData.data;
                setState({
                    temp: data.main.temp,
                    desc: data.weather[0].description,
                    icon: data.weather[0].icon,
                    loading: false
                });
            })
            .catch(error => console.log(error));
    },[])

    return (
        <div 
            className="flex-initial w-full py-1 px-3 font-medium border border-solid cursor-pointer text-center transition-colors duration-200 text-white bg-blue-400 border-green-400 hover:bg-green-600 hover:border-green-600"
            onClick={handleOnClick}
        >
            {text}
        </div>
    )
}

export default Button;