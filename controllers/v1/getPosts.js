module.exports =  async function getPosts(req, res) {
    console.log("POSTS HIT")
    // TODO THIS IS HOW DB SHOULD STORE MODEL
    // const posts = [
    //     {
    //         id: "123",
    //         userId: "8342",
    //         imageSrc: "https://via.placeholder.com/256x144",
    //         likes: [ // array of userIds
    //             "333",
    //         ]
    //     }
    // ]

    // TODO TRANSLATE TO THIS
    const posts = [
        {
            id: "123",
            username: "Billy",
            imageSrc: "https://via.placeholder.com/256x144",
            liked: true,
        },
        {
            id: "222",
            username: "Jimmy",
            imageSrc: "https://via.placeholder.com/512x288",
            liked: false,
        },
    ]
    
    return res.status(200).json(posts);
}