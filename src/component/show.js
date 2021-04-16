import React, {useEffect, useState} from 'react';
import './show.css';

export default function Show(props) {
    const [value, setValue] = useState(props.val);
    const [results, setResults] = useState(props.res);

    useEffect(() => {
        setValue(props.val)
        setResults(props.res)
    })
    return(
        <div className="show-val">
            <p>{value}</p>
            <p>{results}</p>
        </div>
    );
}
