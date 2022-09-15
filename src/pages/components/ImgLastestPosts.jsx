import React from 'react';
import '../../pages/components/body.css';
import { menuImgLastestPosts } from './menuBody';
function ImgLastestPosts() {
    return menuImgLastestPosts.map((item) => (
        <div key={item.id}>
            <img src={item.img} alt="avt" className="img-lastest-posts" />
        </div>
    ));
}

export default ImgLastestPosts;
