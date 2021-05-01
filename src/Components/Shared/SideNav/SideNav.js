import React from 'react';
import './SideNav.css';

const SideNav = () => {
    return (
        <div className="bg-danger sidebar" >
            <div className="bg-success" > <p>div1</p> </div>
            <div className="bg-dark"> <p>div2</p> </div>
            <div className="bg-warning"> <p>div3</p> </div>
        </div>
    );
};

export default SideNav;