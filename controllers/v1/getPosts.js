module.exports =  async function getPosts(req, res) {
    const posts = await req.deps.services.post.find(req.params);
    return res.status(200).json(posts);
}