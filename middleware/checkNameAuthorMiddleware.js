const ApiError = require("../error/ApiError");

module.exports = function (req, res, next) {
  const badWorlds = "монеточка";
  if (badWorlds === buildWorld(req.body.name.toLowerCase().trim())) {
    next(ApiError.badWorld("Название является недопустимым"));
  }
  next();
};

const d = {
  а: ["а", "a", "@"],
  б: ["б", "6", "b"],
  в: ["в", "b", "v"],
  г: ["г", "r", "g"],
  д: ["д", "d", "g"],
  е: ["е", "e"],
  ё: ["ё", "e"],
  ж: ["ж", "zh", "*"],
  з: ["з", "3", "z"],
  и: ["и", "u", "i"],
  й: ["й", "u", "i"],
  к: ["к", "k", "i{", "|{"],
  л: ["л", "l", "ji"],
  м: ["м", "m"],
  н: ["н", "h", "n"],
  о: ["о", "o", "0"],
  п: ["п", "n", "p"],
  р: ["р", "r", "p"],
  с: ["с", "c", "s"],
  т: ["т", "m", "t"],
  у: ["у", "y", "u"],
  ф: ["ф", "f"],
  х: ["х", "x", "h", "}{"],
  ц: ["ц", "c", "u,"],
  ч: ["ч", "ch"],
  ш: ["ш", "sh"],
  щ: ["щ", "sch"],
  ь: ["ь", "b"],
  ы: ["ы", "bi"],
  ъ: ["ъ"],
  э: ["э", "e"],
  ю: ["ю", "io"],
  я: ["я", "ya"],
};

const buildWorld = (world) => {
  for (key in d) {
    // Проходимся по каждой букве в значении словаря. То есть по вот этим спискам ['а', 'a', '@'].
    for (letter of d[key]) {
      // Проходимся по каждой букве в нашей фразе.
      for (w of world) {
        // Если буква совпадает с буквой в нашем списке.
        if (letter === w) {
          // Заменяем эту букву на ключ словаря.
          world = world.replace(w, key);
        }
      }
    }
  }
  return world;
};
