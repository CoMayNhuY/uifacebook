import '../../pages/components/body.css';
import ListGroupFlush from './ListGroupFlush';
import AvtFriendOnline from './AvtFriendOnline';
import ImgLastestPosts from './ImgLastestPosts';
import ListConversation from './ListConversation';
function Body() {
    return (
        <div className="contaier-fluid">
            <div className="row">
                <div className="col-sm-2 colstyle1">
                    <ul class="list-group list-group-flush">
                        <ListGroupFlush />
                        <li class="list-group-item">
                            <i class="fa-solid fa-moon"></i>
                            <span className="fa-title">
                                <i class="fa-solid fa-toggle-on"></i>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="col-sm-7 colstyle2">
                    <div className="frames-ui">
                        <div className="frames-ui-fb">
                            <div className="frames-header">
                                <div className="container">
                                    <div class="row">
                                        <div class="col-sm-6 frames-header1">
                                            <div className="fr-hd">
                                                <img
                                                    src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                                                    alt="avt"
                                                    className="imgAvt-frames"
                                                />
                                                <div>
                                                    <span className="nameAvt">Nguyễn Thị Thanh Vân</span>
                                                </div>
                                                <div>
                                                    <span className="dateAvt">September 14, 2022</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6 frames-header2">
                                            <i class="fa-solid fa-ellipsis-vertical"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="frames-body">
                                <img
                                    src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                                    alt="avt"
                                    className="imgAvt-frames-body"
                                />
                            </div>
                            <div className="frames-footer">
                                <div className="content-footer">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </div>
                                <div className="icons-footer">
                                    <i class="fa-regular fa-heart"></i>
                                    <i class="fa-sharp fa-solid fa-share-nodes"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3 colstyle3">
                    <div className="list-ui">
                        <div className="online-friends">Online Friends</div>
                        <div className="online-frs">
                            <AvtFriendOnline />
                        </div>
                        <div className="lastest-posts">Lastest Posts</div>
                        <div className="img-lastest">
                            <div className="hi">
                                <ImgLastestPosts />
                            </div>
                            <div className="lastest-conversation">Lastest Conversation</div>
                            <div>
                                <ul class="list-group list-group-flush list-conversation">
                                    <ListConversation />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Body;
