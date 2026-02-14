import React from "react";
import { useLoaderData } from "react-router";
import Blog from "./Blog";

const Blogs = () => {
  const blogs = useLoaderData();

  //   console.log(blogs);

  return (
    <>
      <div className="">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </>
  );
};

export default Blogs;
