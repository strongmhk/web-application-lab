import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props) {
    const { comments } = props;
    const myComment = localStorage.getItem('comment');

    return (
        <Wrapper>
            {Array.isArray(comments) && comments.length > 0 ? (
                comments.map((comment, index) => (
                    <CommentListItem key={comment.id} comment={comment} />
                ))
            ) : (
                <></>
            )}
            {myComment && <CommentListItem comment={myComment} />}
        </Wrapper>
    );
}

export default CommentList;
