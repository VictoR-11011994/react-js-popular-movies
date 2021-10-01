import React, {useState} from 'react';

export default function Header() {

    const [dateYear] = useState(new Date().getFullYear());

    return (
        <div className="header animate__animated animate__fadeIn animate__slower">
            <h1 className="header-big-title">Most Popular Movies of {dateYear}</h1>
            <hr className="header-custom-hr" />
        </div>
    )
}
