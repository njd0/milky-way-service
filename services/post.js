import { v4 as uuidv4 } from 'uuid';

export default function initService(Post) {
    const populateProfile = [
        { 
            "$lookup": {
                "from": "profiles",
                "let": { "id": "$createdBy" },
                "pipeline": [
                    { "$match": { "$expr": { "$eq": ["$profileId", "$$id"] }}},
                    { "$project": { "profileId": 1, "username": 1 }},
                ],
                "as": "profile",
            },
        },
        {
            "$addFields": {
                "profile": {
                    "$arrayElemAt": ['$profile', 0],
                },
            },
        },
    ];

    async function create(doc) {
        const post = new Post({
            postId: uuidv4(),
            // createdBy: uuidv4(),
            // imageSrc: "hi",
            ...doc,
        });
        
        return await post.save();
    }

    async function createMany(docs) {
        return await Post.insertMany(docs);
    }

    async function find(match, sort, limit, offset) {
        return await Post.aggregate([
            { $match: match },
            ...populateProfile,
            //   { $sort: sort },
            //   { $limit: limit },
            //   { $skip: offset }
        ]);
    }

    async function findById(id) {
        return await Post.aggregate([
            {postId: id},
            ...populateProfile,
        ]);
    }

    return {
        create,
        createMany,
        find,
        findById,
    }
}