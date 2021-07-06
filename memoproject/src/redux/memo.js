import { createAction, createReducer } from '@reduxjs/toolkit';
import { parse, v4 as uuid } from 'uuid';
import { EditorState, ContentState, convertToRaw, convertFromRaw} from 'draft-js';
import axios from 'axios';

const MOCK_DATA = {
    memolist: [
    {
        id: uuid(), 
        title: JSON.stringify(convertToRaw(EditorState.createWithContent(ContentState.createFromText("제목1")).getCurrentContent())), 
        content: JSON.stringify(convertToRaw(EditorState.createWithContent(ContentState.createFromText("내용1")).getCurrentContent())), 
        date: "2021-01-01",
        weather: { temp: 0, desc: '', icon: '', loading: true }
    }
]};

export const removeMemo = createAction('memo/remove');
export const saveMemo = createAction('memo/save');

export const memoReducer = createReducer(MOCK_DATA, (builder) =>{
    builder
        .addCase(removeMemo, (state, action) => {
            return {memolist: state.memolist.filter(memo => memo.id !== action.payload)};
        })
        .addCase(saveMemo, (state, action) => {
            const today = new Date();

            let title_JSON;
            const title_string = window.localStorage.getItem('title');
                title_JSON = EditorState.createWithContent(convertFromRaw(JSON.parse(title_string)));
            if(convertToRaw(title_JSON.getCurrentContent()).blocks[0].text === ""){
                title_JSON = EditorState.createWithContent(ContentState.createFromText("제목"));
            }

            let content_JSON;
            const content_string = window.localStorage.getItem('content');
                content_JSON = EditorState.createWithContent(convertFromRaw(JSON.parse(content_string)));
            if(convertToRaw(content_JSON.getCurrentContent()).blocks[0].text === ""){
                content_JSON = EditorState.createWithContent(ContentState.createFromText("내용"));
            }

            const weather = JSON.parse(window.localStorage.getItem('weather'))

            const update = {
                title: JSON.stringify(convertToRaw(title_JSON.getCurrentContent())),
                content: JSON.stringify(convertToRaw(content_JSON.getCurrentContent())), 
                date: today.toLocaleString(), 
                weather: weather
            };

            window.localStorage.clear();

            if(state.memolist.some(memo => memo.id === action.payload)){
                return {memolist: state.memolist.map(memo => memo.id === action.payload ? {id: memo.id, ...update} : memo)};
            }
            else{ 
                return {memolist: [{id: uuid(), ...update}].concat(state.memolist)};
            }
        })
})