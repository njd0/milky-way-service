module.exports =  async function createPost(req, res) {
    console.log("BODY", req.body)
    const post = await req.deps.services.post.create(req.body);
    console.log("BODY", post)
    return res.status(200).json(post);
}