import React from 'react';

const PostList = ({ posts }) => {
    return (
        <div className="post-list">
            <h2>Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
