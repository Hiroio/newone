import React from 'react';

const PostItem = (props) => {
    return (
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id} {props.post.tittle}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__button">
                    <button>delete</button>
                </div>
            </div>
    );
};

export default PostItem;