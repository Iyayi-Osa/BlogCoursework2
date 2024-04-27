import React from 'react';

const TagList = ({ tags }) => {
    return (
        <div className="tag-list">
            <h2>Tags</h2>
            <ul>
                {tags.map(tag => (
                    <li key={tag.id}>{tag.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default TagList;
