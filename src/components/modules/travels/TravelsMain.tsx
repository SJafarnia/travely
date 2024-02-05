import { getUserPageDataByEmail } from "@/lib/db/queries";
import Image from "next/image"
import Link from "next/link"
import { slugify } from "@/utils/textModifiers"
import Socials from "./Socials";
import ProfileDetails from "./ProfileDetails";
import { notFound } from "next/navigation";

async function TravelsMain({ user }: { user: string }) {
    const userData = await getUserPageDataByEmail(user);
    if (!userData) return notFound()

    return (
        <div className="w-full md:max-w-5xl h-auto my-20 mx-auto text-white">
            <div className="profile info bg-Night/95 p-4 flex my-16 [&>div]:p-5 rounded-md justify-between">
                <ProfileDetails />
                <Socials />
            </div>
            <div className="gap-8 grid-cols-1 md:grid-cols-3 grid">

                {userData.posts.map((post) => (
                    <Link key={post.id} href={`/user/${post.author.email}/travels/${slugify(post.id)}`} scroll={false}>
                        {post.parts[0]?.imageGallery[0]?.link.startsWith("https://") ?
                            <Image src={`${post.parts[0]?.imageGallery[0]?.link}`} height={600} width={600} className="rounded-md h-full shadow-md" alt="k"></Image>
                            :
                            // TODO: replace with a default 404 image
                            <Image src={"/images/airport.jpg"} height={600} width={600} className="rounded-md h-full shadow-md" alt="k"></Image>
                        }
                    </Link>
                ))}

            </div>
        </div >
    )
}

export default TravelsMain