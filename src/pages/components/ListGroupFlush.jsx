import React from 'react';
import '../../pages/components/body.css';
import { menuListGroupFlush } from './menuBody';

function ListGroupFlush() {
    return menuListGroupFlush.map((item) => (
        <div>
            <li class="list-group-item" key={item.id}>
                <i className={item.icon}></i>
                <span className="fa-title">{item.title}</span>
            </li>
        </div>
    ));
}

export default ListGroupFlush;
