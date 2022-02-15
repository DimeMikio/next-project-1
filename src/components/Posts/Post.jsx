import P from 'prop-types';
import './styles.css';

import { React } from 'react';

import { PostCard } from '../PostCard/PostCard';

export const Posts = ({ posts = [] }) => (
    <div className='posts'>
        {posts.map(post => (
            <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                cover={post.cover}
            />
        ))}
    </div>
)

Posts.defaultProps = {
    posts: [],
}

Posts.propTypes = {
    posts: P.arrayOf(P.shape({
        id: P.number.isRequired,
        cover: P.string.isRequired,
        body: P.string.isRequired,
        title: P.string.isRequired,
    })),
}
