import React from 'react';
import { menuListConversation } from './menuBody';
import '../../pages/components/body.css';
function ListConversation() {
    return menuListConversation.map((item) => (
        <div>
            <li className="list-group-item">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <img src={item.avt} alt="avt" className="avt-friend-on" />
                        </div>
                        <div className="col-sm-10">
                            <div className="list-item">
                                <div>
                                    <span className="name-title">{item.nameTitle}</span>
                                </div>
                                <div>
                                    <span className="ask-conversation">
                                        <span className="to-friends">{item.toFriends}</span> {item.askConversation}
                                    </span>
                                </div>
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </li>
        </div>
    ));
}

export default ListConversation;
