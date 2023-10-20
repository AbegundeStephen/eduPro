import { sortArticles } from "@/src/utilitities"
import React from "react"
import BlogOneLayout from "../Blog/BlogOneLayout"
import BlogTwoLayout from "../Blog/BlogTwoLayout"
import BlogThreeLayout from "../Blog/BlogThreeLayout"
const FeaturedPost = ({blogs}) => {
  const sortedBlogs = sortArticles(blogs)
  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
     <h2 className="w-full capitalize text-2xl md:text-4xl text-dark dark:text-light">Featured Posts</h2>
 

 <div className="">
 <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
        <BlogOneLayout blog={sortedBlogs[1]} />
      </article>

      <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
        <BlogTwoLayout blog={sortedBlogs[2]} />
      </article>

      <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
        <BlogThreeLayout blog={sortedBlogs[3]} />
      </article>
 </div>
    </section>
  )
}

export default FeaturedPost