const moment = require("moment");
const { Op } = require("sequelize");
const { Music } = require("../models/music");
const ApiError = require("../error/ApiError");

class MusicController {
  async create(req, res) {
    try {
      const { title, description, authorId } = req.body;
      const music = await Music.create({ title, description, authorId });
      next(music);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res, next) {
    try {
      let { musicId, limit, page } = req.query;
      page = page || 1;
      limit = limit || 9;
      let offset = page * limit - limit;
      let music;
      if (!musicId) {
        music = await Music.findAndCountAll({ limit, offset });
      } else {
        music = await Music.findAndCountAll({
          where: { id: musicId },
          limit,
          offset,
        });
      }
      next(music);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getMusicLike(req, res, next) {
    try {
      const { names, date } = req.query;
      let music;
      if (date && !names) {
        music = await Music.findAll({
          where: {
            createdAt: {
              [Op.gte]: moment.utc(date),
              [Op.lt]: moment.utc(date).add(1, "day"),
            },
          },
        });
        next(music.filter((music) => music !== null));
      }
      if ((names && date) || names) {
        const operator = date ? Op.and : Op.or;
        music = await Promise.all(
          names
            .split(",")
            .filter((name) => name.trim().length)
            .map(
              async (name) =>
                await Music.findAll({
                  where: {
                    [operator]: [
                      {
                        title: {
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
        next(music.filter((music) => music !== null)[0]);
      }
      return res.json({ message: "Параметры не указаны!" });
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const music = await Music.findAll({
        where: { id },
      });
      next(music);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async update(req, res) {
    try {
      const { id, title, description } = req.body;
      let music;
      if (title && description) {
        music = await Music.update(
          {
            title,
            description,
          },
          {
            where: { id },
          }
        );
      }
      if (!title && description) {
        music = await Music.update(
          {
            description,
          },
          {
            where: { id },
          }
        );
      }
      if (title && !description) {
        music = await Music.update(
          {
            title,
          },
          {
            where: { id },
          }
        );
      }
      next(music);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const music = await Music.destroy({
        where: { id },
      });
      next(music);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }

  async deleteAll(req, res) {
    try {
      const music = await Music.destroy({
        truncate: true,
      });
      next(music);
    } catch (error) {
      next(ApiError.badRequest(error.message));
    }
  }
}

module.exports = new MusicController();
