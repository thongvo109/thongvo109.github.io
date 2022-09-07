import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import readingTime from "reading-time";

import {
  CardCategory,
  CardContainer,
  CardDescription,
  CardHeader,
  CardReadingTime,
  CardTitle,
} from "./";

export const Card = ({ blog }) => {
  const [labels, setLabels] = useState([]);

  const history = useHistory();

  const openBlog = (title, number) => {
    history.push(`/blog/${title}/${number}`);
  };

  useEffect(() => {
    const labels = blog.labels.nodes.filter((value) => {
      return value.name;
    });
    console.log(blog.labels.nodes);
    setLabels(labels);
  }, [blog.labels.nodes]);

  return (
    <CardContainer color="#DEDEDE">
      <CardHeader>
        <>
          {labels.map((value, i) => {
            return <CardCategory value={value} key={i} />;
          })}
        </>
        <CardReadingTime time={readingTime(blog.body).minutes} />
      </CardHeader>
      <div onClick={() => openBlog(blog.title, blog.number)}>
        <CardTitle>{blog.title}</CardTitle>
        <CardDescription>{blog.bodyText}</CardDescription>
      </div>
    </CardContainer>
  );
};
