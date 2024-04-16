// TODO: fetch most liked travels | partial rendering |
import { getMostLikedPosts, getUserFollowings } from "@/lib/db/queries/getQueries"
import { getServerSession } from "next-auth"
import FeedPost from "./FeedPost"
import dynamic from "next/dynamic"

async function FeedMain() {
    const session = await getServerSession()
    const x = await getUserFollowings(session?.user?.email)
    let posts
    if (session.user.email) posts = await getMostLikedPosts()

    return (
        <div className="w-full mt-6 bg-[#000000] py-16">
            {posts.length > 0 && posts.map((post) => (
                <FeedPost key={post.id} username={post.author.username || post.author.email} id={post.id} title={post.title} profileImg={post.author.profileImg} likes={post._count.likes} img={post.parts[0].imageGallery[0].link} />
            ))}
        </div>
    )
}

export default FeedMain