import { useEffect } from "react";

function useFetchFollowings(username: string, followings: [], setFollowings: ({ }) => void, showModal: "followings" | "followers" | '') {
    useEffect(() => {
        const fetchData = async () => {
            const res: { followings: {}[] } = await fetch('/api/userdata/getfollowings', {
                method: 'POST',
                body: JSON.stringify({ username }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json());

            setFollowings(res.followings);
        }
        if (showModal) {
            fetchData()
        }
    }, [showModal])

}

export default useFetchFollowings