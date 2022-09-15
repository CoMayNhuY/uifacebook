import React from 'react';
import '../../components/Header/header.css';
import { menuHeader } from './constantHeader';

function BellHeader() {
    return menuHeader.map((item) => (
        <div>
            <div>
                <i className={item.icon1}></i>
                <i className={item.icon2}>
                    <span className="fa-circle-number">{item.notification}</span>
                </i>
            </div>
        </div>
    ));
}

export default BellHeader;
