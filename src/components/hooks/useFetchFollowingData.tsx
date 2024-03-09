import { useSession } from "next-auth/react";
import { useEffect } from "react";

function useFetchFollowingData(username: string, setFollowingData: ({ }) => void) {
    const { data: session } = useSession();

    useEffect(() => {
        const fetchData = async () => {
            if (session?.user?.email) {
                const res = await fetch('/api/userdata/following', {
                    method: 'POST',
                    body: JSON.stringify({ username }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }).then((res) => res.json());
                setFollowingData({ ...res })
            }
        }
        fetchData()
    }, [session, username])

}

export default useFetchFollowingData