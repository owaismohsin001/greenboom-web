import React from "react";
import { Blogs } from "../../constants";
import { BsThreeDotsVertical } from "react-icons/bs";

function BlogsComponent() {
  return (
    <div className="bg-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-32">
      {Blogs.map((blog) => (
        <div key={blog.id} className="relative group">
          <img
            src={blog.img}
            alt={blog.title}
            className="w-full h-72 object-cover rounded-lg"
          />

          <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-60 transition-opacity"></div>

          <div className="pt-5 pl-4 absolute top-3 left-3 text-white text-sm font-light">
            {blog.date}
          </div>

          <div className="pt-5 pr-4 absolute top-3 right-3 text-white cursor-pointer">
            <BsThreeDotsVertical size={20} />
          </div>

          <div className="pb-4 pl-4 pr-12 absolute bottom-3 left-3 right-3 text-white text-lg font-bold">
            {blog.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogsComponent;
