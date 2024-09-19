import React from "react";
import styled from "styled-components";
import PostListItem from "./PostListItem";
import { useNavigate } from "react-router-dom";

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

function PostList(props) {
    const { posts, onClickItem } = props;
    console.log(posts);
    const navigate = useNavigate();
    const myTitle = localStorage.getItem('title');
    return (
        <Wrapper>
            {posts.map((post, index) => {
                return (
                    <PostListItem
                        key={post.id}
                        post={post}
                        onClick={() => {
                            onClickItem(post);
                        }}
                    />
                );
            })}
            <PostListItem  key={4} post={myTitle} onClick={()=>{
                navigate('/post/4');
            }}/> 
        </Wrapper>
    );
}

export default PostList;
