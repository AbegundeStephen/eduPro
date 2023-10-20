import HomeSection from "@/src/components/home/HomeSection"
import FeaturedPost from "@/src/components/home/FeaturedPost"
import RecentPost from "@/src/components/home/RecentPost"
import {allBlogs} from "contentlayer/generated"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
     <HomeSection articles={allBlogs}/>
     <FeaturedPost blogs={allBlogs}/>
     <RecentPost blogs={allBlogs}/>
    </main>
  )
}
