import { v4 as uuidv4 } from 'uuid';

module.exports =  async function getPosts(req, res) {
    let docs = [];
    for (let i = 0; i < 5; ++i) {
        docs.push({
            postId: uuidv4(),
            createdBy: uuidv4(),
            imageSrc: "https://via.placeholder.com/256x144",
        });
    }

    const posts = await req.deps.services.post.createMany(docs)
    
    return res.status(200).json(posts);
}