import { v4 as uuidv4 } from 'uuid';

export default function initService(Post) {
    async function create(doc) {
        const post = new Post({
            postId: uuidv4(),
            createdBy: uuidv4(),
            imageSrc: "hi",
            ...doc,
        });
        
        return await post.save();
    }

    async function createMany(docs) {
        return await Post.insertMany(docs);
    }

    async function find(query) {
        return await Post.find(query);
    }

    async function findById(id) {
        return await Post.findOne({postId: id});
    }

    return {
        create,
        createMany,
        find,
        findById,
    }
}