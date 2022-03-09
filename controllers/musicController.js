const ApiError = require("../../online-store-full-course/server/error/ApiError");
const { Music } = require("../models/music");

class MusicController {
    async create(req, res) {
        try {
            const { title, description, authorId } = req.body;
            const music = await Music.create({ title, description, authorId });
            return res.json(music)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let { authorId, limit, page } = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let music;
            if (!authorId) {
                music = await Music.findAndCountAll({limit, offset})
            }else {
                music = await Music.findAndCountAll({where:{id: authorId}, limit, offset})
            }
            return res.json(music)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const music = await Music.findAll({ 
                where: { id }
             })
            return res.json(music)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async update(req, res) {
        try {
            const { id, title, description } = req.body;
            let music;
            if (title && description) {
                music = await Music.update({
                    title, description
                },
                {
                    where: { id }
                })
            }
            if (!title && description) {
                music = await Music.update({
                    description
                },
                {
                    where: { id }
                })
            }
            if (title && !description) {
                music = await Music.update({
                    title
                },
                {
                    where: { id }
                })
            }
            return res.json(music);
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const music = await Music.destroy({
                where: { id }
            })
            return res.json(music);
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async deleteAll(req, res) {
        try {
            const music = await Music.destroy({
                truncate: true,
            })
            return res.json(music);
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new MusicController();