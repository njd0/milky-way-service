import { v4 as uuidv4 } from 'uuid';

export default function initService(Profile) {
    async function create(doc) {
        const post = new Profile({
            profileId: uuidv4(),
            ...doc,
        });
        
        return await post.save();
    }

    async function createMany(docs) {
        return await Profile.insertMany(docs);
    }

    async function find(query) {
        return await Profile.find(query);
    }

    async function findById(id) {
        return await Profile.findOne({postId: id});
    }

    return {
        create,
        createMany,
        find,
        findById,
    }
}