import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import React, { useEffect, useState } from "react";

import { BlogContainer } from "../Components/Blog";
import { Card } from "../Components/Blog/Card";
import { Loader } from "../Components/Common";
import { Header } from "../Components/Header";
import { config } from "../config";

const GET_POSTS = gql`
{
  repository(owner: "${config.githubUserName}", name: "${config.githubRepo}") {
    issues(first: 100, states: OPEN, orderBy: { direction: DESC, field: CREATED_AT }) {
      nodes {
        title
        body
        bodyHTML
        bodyText
        number
        labels(first: 100) {
          nodes {
            color
            name
            id
          }
        }
        author {
          url
          avatarUrl
          login
        }
        updatedAt
        id
      }
    }
  }
}
`;

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const { loading, error, data } = useQuery(GET_POSTS);

  useEffect(() => {
    if (!loading) {
      if (error) {
        console.error(error);
      }

      if (data) {
        setPosts(data?.repository?.issues?.nodes);
      }
    }
  }, [loading, error, data]);

  return (
    <>
      <Header />
      <BlogContainer>
        {loading ? (
          <Loader />
        ) : (
          posts.map((v, i) => {
            return <Card blog={v} key={i} />;
          })
        )}
      </BlogContainer>
    </>
  );
};

export default Blog;
