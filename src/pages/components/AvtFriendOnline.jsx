import React from 'react';
import { menuAvtFriendOnline } from './menuBody';
function AvtFriendOnline() {
    return menuAvtFriendOnline.map((item) => (
        <div key={item.id}>
            <img src={item.imgAvt} alt="avt" className="avt-friend-on" />
        </div>
    ));
}

export default AvtFriendOnline;
