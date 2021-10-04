import React from 'react';
import notfound from '../../img/Monster 404 Error-cuate.png';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="notfound">
            <img src={notfound} alt="Not found" />
        </div>
    );
};

export default NotFound;