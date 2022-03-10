const moment = require("moment");
const { Op } = require("sequelize");
const { Author } = require("../models/author");
const { Music } = require("../models/music");
const ApiError = require("../error/ApiError");

class AuthorController {
  async create(req, res) {
    try {
      const { name } = req.body;
      const author = await Author.create({ name });
      return res.json(author);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      let { authorId, musicId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;
      let author;
      if (!authorId && !musicId) {
        author = await Author.findAndCountAll({ limit, offset });
      }
      if (authorId && !musicId) {
        author = await Author.findAndCountAll({
          where: { id: authorId },
          limit,
          offset,
        });
      }
      if (!authorId && musicId) {
        author = await Author.findAndCountAll({
          where: { id: musicId },
          limit,
          offset,
        });
      }
      if (authorId && musicId) {
        author = await Author.findAndCountAll({
          where: { id: musicId, id: authorId },
          limit,
          offset,
        });
      }
      res.json(author);
      next();
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const author = await Author.findAll({
        where: { id },
      });
      return res.json(author);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAuthorLike(req, res, next) {
    try {
      const { names, date } = req.query;
      let author;
      if (date && !names) {
        author = await Author.findAll({
          where: {
            createdAt: {
              [Op.gte]: moment.utc(date),
              [Op.lt]: moment.utc(date).add(1, "day"),
            },
          },
        });
        return res.json(author.filter((author) => author !== null));
      }
      if ((names && date) || names) {
        const operator = date ? Op.and : Op.or;
        author = await Promise.all(
          names
            .split(",")
            .filter((name) => name.trim().length)
            .map(
              async (name) =>
                await Author.findAll({
                  where: {
                    [operator]: [
                      {
                        name: {
                          [Op.substring]: name.trim(),
                        },
                      },
                      {
                        createdAt: {
                          [Op.gte]: moment.utc(date),
                          [Op.lt]: moment.utc(date).add(1, "day"),
                        },
                      },
                    ],
                  },
                })
            )
        );
        return res.json(author.filter((author) => author !== null)[0]);
      }
      return res.json({ message: "Параметры не указаны!" });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOneMusic(req, res, next) {
    try {
      const { id } = req.params;
      const author = await Author.findAll({
        where: { id },
        include: [{ model: Music }],
      });
      return res.json(author);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAllMusic(req, res, next) {
    try {
      const { authors } = req.query;
      if (!authors instanceof Array) {
        next(ApiError.badRequest("Параметр не в виде массива"));
      }
      const author = await Author.findAll({
        where: {
          id: {
            [Op.in]: authors.split(","),
          },
        },
        include: [{ model: Music }],
      });
      return res.json(author);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async update(req, res) {
    try {
      const { id, name } = req.body;
      const author = await Author.update(
        {
          name,
        },
        {
          where: { id },
        }
      );
      return res.json(author);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const author = await Author.destroy({
        where: { id },
      });
      return res.json(author);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteAll(req, res) {
    try {
      const author = await Author.destroy({
        truncate: true,
      });
      return res.json(author);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new AuthorController();
