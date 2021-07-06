import { createAction, createReducer } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
const MOCK_DATA = { memolist: [] };

export const removeMemo = createAction('memo/remove');
export const saveMemo = createAction('memo/save');

export const memoReducer = createReducer(MOCK_DATA, (builder) =>{
    builder
        .addCase(removeMemo, (state, action) => {
            state = {memolist: state.memolist.filter(memo => memo.id !== action.payload)};
        })
        .addCase(saveMemo, (state, action) => {
            if(state.memolist.some(memo => memo.id === id)){
                setData({memolist: data.memolist.map(memo => memo.id === id ? {id: memo.id, title: update.title, content: update.content, date: update.date, weather: update.weather} : memo)});
            }
            else{
                const memo = {
                    id: uuid(), 
                    title: action.payload.title, 
                    content: action.payload.content, 
                    date: action.payload.date, 
                    weather: action.payload.weather
                }
                {memolist: [memo].concat(state.memolist)};
            }
        })
})