import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";
import data from "../../data.json";

const Wrapper = styled.div`
    padding: 16px;
    width: calc(100% - 32px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Container = styled.div`
    width: 100%;
    max-width: 720px;

    & > * {
        :not(:last-child) {
            margin-bottom: 16px;
        }
    }
`;

const PostContainer = styled.div`
    padding: 8px 16px;
    border: 1px solid grey;
    border-radius: 8px;
`;

const TitleText = styled.p`
    font-size: 28px;
    font-weight: 500;
`;

const ContentText = styled.p`
    font-size: 20px;
    line-height: 32px;
    white-space: pre-wrap;
`;

const CommentLabel = styled.p`
    font-size: 16px;
    font-weight: 500;
`;

function PostViewPage(props) {
    const navigate = useNavigate();
    const { postId } = useParams();

    const post = data.find((item) => {
        return item.id == postId;
    });

    const [comment, setComment] = useState("");
    const [localComment, setLocalComment] = useState('');

    const handleCommentChange = (event) => {
        setComment(event.target.value);
    };

    const onBtnClick = () => {
        // localStorage.setItem("comment", comment);
        setLocalComment(localStorage.setItem("comment", comment));
        navigate("/");
    };

    const myTitle = localStorage.getItem('title');
    const myComment = localStorage.getItem('comment');

    return (
        <Wrapper>
            <Container>
                <Button
                    title="뒤로 가기"
                    onClick={() => {
                        navigate("/");
                    }}
                />
                <PostContainer>
                    {
                        post ? (
                            <>
                            <TitleText>{post.title}</TitleText>
                            <ContentText>{post.content}</ContentText>
                            </>
                        )    : (
                            <>
                            <TitleText>{myTitle}</TitleText>
                            <ContentText>{myComment}</ContentText>
                            </>
                        )            
                    }
                </PostContainer>

                <CommentLabel>댓글</CommentLabel>
                {
                    post ? <CommentList comments={post.comments} /> : <CommentList comments={localComment} />
                }
                <TextInput
                    height={40}
                    value={comment}
                    onChange={handleCommentChange}
                />
                <Button
                    title="댓글 작성하기"
                    onClick={onBtnClick}
                />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;
