const ApiError = require("../../online-store-full-course/server/error/ApiError");
const { Author } = require("../models/author");
const { Music } = require("../models/music");

class AuthorController {
    async create(req, res) {
        try {
            const { name } = req.body;
            const author = await Author.create({ name });
            return res.json(author)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getAll(req, res, next) {
        try {
            let {authorId, musicId, limit, page} = req.query
            page = page || 1
            limit = limit || 9
            let offset = page * limit - limit
            let author;
            if (!authorId && !musicId) {
                author = await Author.findAndCountAll({limit, offset})
            }
            if (authorId && !musicId) {
                author = await Author.findAndCountAll({where:{id: authorId}, limit, offset})
            }
            if (!authorId && musicId) {
                author = await Author.findAndCountAll({where:{id: musicId}, limit, offset})
            }
            if (authorId && musicId) {
                author = await Author.findAndCountAll({where:{id: musicId, id: authorId}, limit, offset})
            }
            res.json(author)
            next()
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;
            const author = await Author.findAll({ 
                where: { id },
                include: [{model: Music}]
             })
            return res.json(author)
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async update(req, res) {
        try {
            const { id, name } = req.body;
            const author = await Author.update({
                name
            },
            {
                where: { id }
            })
            return res.json(author);
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async delete(req, res) {
        try {
            const { id } = req.params;
            const author = await Author.destroy({
                where: { id }
            })
            return res.json(author);
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }

    async deleteAll(req, res) {
        try {
            const author = await Author.destroy({
                truncate: true,
            })
            return res.json(author);
        } catch (error) {
            next(ApiError.badRequest(error.message))
        }
    }
}

module.exports = new AuthorController();