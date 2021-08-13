import React from 'react';

import './style.css';

import Post from './Post.jsx';

import user from '../../assets/images/user-image.jpg';

import post1 from '../../assets/images/post1.jpg';
import post2 from '../../assets/images/post2.jpg';
import post3 from '../../assets/images/post3.jpg';

const author = {
    name: "Someone Popular",
    photo: user,
    nickname: "@iampopular"
};

const posts = [
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis incidunt fuga beatae commodi quaerat provident!",
        image: post1,
        date: " Feb 26",
        comments: 482,
        retweets: 146,
        likes: 887,
        id: '0'
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, atque!",
        image: post2,
        date: "Jul 27",
        comments: 123,
        retweets: 74,
        likes: 624,
        id: '1'
    },
    {
        content: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        image: post3,
        date: "Jul 27",
        comments: 123,
        retweets: 74,
        likes: 624,
        id: '2'
    }
];

const PostsPage = () => (
    <section className='section post-section'>
        <div className='container'>
            <h2 className='section__title'>
                Posts
            </h2>
            <div className='content'>
                <div className='content-row posts-row'>
                    {
                        posts.map((post, index) => <Post author={author} post={post} key={post.id} />)
                    }
                </div>
            </div>
        </div>
    </section>
);

export default PostsPage;