import './Post.css';

import approvedUser from '../../assets/images/approved-signal.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const Post = ({ author, post }) => {
    return (
        <div className='post'>
            <div className='post__avatar'>
                <img className='post__avatar-image' src={author.photo} alt='author-avatar' />
            </div>
            <div className='post__inner'>
                <div className='post__header'>
                    <div className='post__info'>
                        <span className='author-name'>
                            {author.name}
                            <img className='svg-icon approved' src={approvedUser} alt='approved' />
                        </span>
                        <span className='author-nickname'>{author.nickname}</span>
                        <span className='post__date'>{post.date}</span>
                    </div>
                    <button className='post__button'>
                        <FontAwesomeIcon icon={faChevronDown}></FontAwesomeIcon>
                    </button>
                </div>
                <div className='post__body'>
                    <p className='post__text'>{post.content}</p>
                    <img className='post__image' alt='post-img' src={post.image} />
                </div>
                <div className='post__footer'>
                    <div className='post__column-4 comment action'>
                        <button className='post__button'>
                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                        </button>
                        <span className='action__info'>{post.comments}</span>
                    </div>
                    <div className='post__column-4 retweet action'>
                        <button className='post__button'>
                            <FontAwesomeIcon icon={faRetweet}></FontAwesomeIcon>
                        </button>
                        <span className='action__info'>{post.retweets}</span>
                    </div>
                    <div className='post__column-4 like action'>
                        <button className='post__button'>
                            <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                        </button>
                        <span className='action__info'>{post.likes}</span>
                    </div>
                    <div className='post__column-4 upload action'>
                        <button className='post__button'>
                            <FontAwesomeIcon icon={faUpload}></FontAwesomeIcon> 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;