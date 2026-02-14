import React from "react";

const Blog = ({ blog }) => {
  const { title, author, content, date } = blog;

  console.log(blog);

  return (
    <div className="bg-white p-10 my-5 rounded-2xl shadow-md">
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h5 className="text-xs">{date}</h5>
      </div>
      <hr className="text-slate-400"/>
      <h3 className="text-[13px] mb-3 leading-tight">{author}</h3>
      <p className="">{content}</p>
    </div>
  );
};

export default Blog;
