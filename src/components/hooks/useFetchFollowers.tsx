import { useEffect } from "react";

function useFetchFollowers(username: string, followers: [], setFollowers: ({ }) => void, showModal: "followings" | "followers" | '') {
    useEffect(() => {
        const fetchData = async () => {
            const res: { followers: {}[] } = await fetch('/api/userdata/getfollowers', {
                method: 'POST',
                body: JSON.stringify({ username }),
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then((res) => res.json());
            
            setFollowers(res.followers);
        }
        if (showModal) {
            fetchData()
        }
    }, [showModal])

}

export default useFetchFollowers