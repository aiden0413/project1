import React from "react";
import { Link } from 'react-router-dom';

function Memo({
    id="",
    title="",
    content="",
    date="",
}) {

    const [state, setState] = useState({title: title, content: content, date: date})
    
    const handleChange = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

 
    return (
        <div>
            <Link to={"/memo/" + id}>
                <div className="flex flex-col gap-3 bg-green-400 p-3">
                    <div className="bg-green-200">{title}</div>
                    <div className="bg-green-200 h-300px">{content}</div>
                    <div className="bg-green-200">{date}</div>
                </div>
            </Link>
        </div>
    )
}

export default Memo;