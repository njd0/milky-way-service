import { v4 as uuidv4 } from 'uuid';

module.exports =  async function seedPosts(req, res) {
    let docs = [];
    let profileDocs = [];

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    for (let i = 0; i < 5; ++i) {
        const postId = uuidv4();
        const profileId = uuidv4();
        docs.push({
            postId: postId,
            createdBy: profileId,
            imageSrc: "https://via.placeholder.com/256x144",
        });

        profileDocs.push({
            profileId: profileId,
            username: makeid(6),
        });
    }

    const posts = await req.deps.services.post.createMany(docs);
    const profiles = await req.deps.services.profile.createMany(profileDocs);

    return res.status(200).json({posts, profiles});
}