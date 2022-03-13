const result = document.getElementById("result");

const authorPost = document.getElementById("author/post/");
const authorGetMusic = document.getElementById("author/get/music");
const authorGetMusicId = document.getElementById("author/get/music/Id");
const authorGetLike = document.getElementById("author/get/like");
const authorGetAll = document.getElementById("author/get/");
const authorGetId = document.getElementById("author/get/id");
const authorPut = document.getElementById("author/put/");
const authorDeleteId = document.getElementById("author/delete/id");
const authorDelete = document.getElementById("author/delete/");

const textAuthorPost = document.getElementById("text-author/post/");
const textAuthorGetMusicAuthors = document.getElementById(
  "text-author/get/music/authors"
);
const textAuthorGetMusicById = document.getElementById(
  "text-author/get/music/Id"
);
const textAuthorGetLIkeName = document.getElementById(
  "text-author/get/like/name"
);
const textAuthorGetLIkeDate = document.getElementById(
  "text-author/get/like/date"
);
const textAuthorGetId = document.getElementById("text-author/get/id");
const textAuthorPutName = document.getElementById("text-author/put/name");
const textAuthorPutId = document.getElementById("text-author/put/id");
const textAuthorDeleteId = document.getElementById("text-author/delete/id");
const textAuthorGetAuthorId = document.getElementById(
  "text-author/get/authorId"
);
// const textAuthorGetMusicId = document.getElementById('text-author/get/musicId');
const textAuthorGetLimit = document.getElementById("text-author/get/limit");
const textAuthorGetPage = document.getElementById("text-author/get/page");

authorPost.addEventListener("click", async () => {
  const json = await myFetch(`api/author`, "POST", {
    name: textAuthorPost.value,
  });
  result.innerHTML = JSON.stringify(json);
});
authorGetMusic.addEventListener("click", async () => {
  const query = `?authors=${textAuthorGetMusicAuthors.value}`;
  const json = await myFetch(`api/music${query}`, "GET");
  result.innerHTML = JSON.stringify(json.rows);
});
authorGetMusicId.addEventListener("click", async () => {
  const json = await myFetch(
    `api/author/music/${textAuthorGetMusicById.value}`,
    "GET"
  );
  result.innerHTML = JSON.stringify(json);
});
authorGetLike.addEventListener("click", async () => {
  const query = `?names=${textAuthorGetLIkeName.value}&date=${textAuthorGetLIkeDate.value}`;
  const json = await myFetch(`api/author/like${query}`, "GET");
  result.innerHTML = JSON.stringify(json);
});
authorGetAll.addEventListener("click", async () => {
  const query = `?authorId=${textAuthorGetAuthorId.value}&limit=${textAuthorGetLimit.value}&page=${textAuthorGetPage.value}`;
  const json = await myFetch(`api/author${query}`, "GET");
  result.innerHTML = JSON.stringify(json.rows);
});
authorGetId.addEventListener("click", async () => {
  const json = await myFetch(`api/author/${textAuthorGetId.value}`, "GET");
  result.innerHTML = JSON.stringify(json);
});
authorPut.addEventListener("click", async () => {
  const json = await myFetch(`api/author`, "PUT", {
    id: textAuthorPutId.value,
    name: textAuthorPutName.value,
  });
  result.innerHTML = JSON.stringify(json);
});
authorDeleteId.addEventListener("click", async () => {
  const json = await myFetch(
    `api/author/${textAuthorDeleteId.value}`,
    "DELETE"
  );
  result.innerHTML = JSON.stringify(json);
});
authorDelete.addEventListener("click", async () => {
  const json = await myFetch(`api/author`, "DELETE");
  result.innerHTML = JSON.stringify(json);
});

const musicPost = document.getElementById("music/post/");
const musicGetLike = document.getElementById("music/get/like");
const musicGetAll = document.getElementById("music/get/");
const musicGetId = document.getElementById("music/get/id");
const musicPut = document.getElementById("music/put/");
const musicDeleteId = document.getElementById("music/delete/id");
const musicDelete = document.getElementById("music/delete/");

const textMusicPostTitle = document.getElementById("text-music/post/title");
const textMusicPostDescription = document.getElementById(
  "text-music/post/description"
);
const textMusicPostAuthorId = document.getElementById(
  "text-music/post/authorId"
);
const textMusicGetLikeName = document.getElementById(
  "text-music/get/like/name"
);
const textMusicGetLikeDate = document.getElementById(
  "text-music/get/like/date"
);
const textMusicGetId = document.getElementById("text-music/get/id");
const textMusicGetMusicId = document.getElementById("text-music/get/musicId");
const textMusicGetLimit = document.getElementById("text-music/get/limit");
const textMusicGetPage = document.getElementById("text-music/get/page");
const textMusicPutId = document.getElementById("text-music/put/id");
const textMusicPutTitle = document.getElementById("text-music/put/title");
const textMusicPutDescription = document.getElementById(
  "text-music/put/description"
);
const textMusicDeleteId = document.getElementById("text-music/delete/id");

musicPost.addEventListener("click", async () => {
  const json = await myFetch(`api/music`, "POST", {
    title: textMusicPostTitle.value,
    description: textMusicPostDescription.value,
    authorId: textMusicPostAuthorId.value,
  });
  result.innerHTML = JSON.stringify(json);
});
musicGetLike.addEventListener("click", async () => {
  const query = `?names=${textMusicGetLikeName.value}&date=${textMusicGetLikeDate.value}`;
  console.log(query);
  const json = await myFetch(`api/music/like${query}`, "GET");
  result.innerHTML = JSON.stringify(json);
});
musicGetAll.addEventListener("click", async () => {
  const query = `?musicId=${textMusicGetMusicId.value}&limit=${textMusicGetLimit.value}&page=${textMusicGetPage.value}`;
  const json = await myFetch(`api/music${query}`, "GET");
  result.innerHTML = JSON.stringify(json.rows);
});
musicGetId.addEventListener("click", async () => {
  const json = await myFetch(`api/music/${textMusicGetId.value}`, "GET");
  result.innerHTML = JSON.stringify(json);
});
musicPut.addEventListener("click", async () => {
  const json = await myFetch(`api/music`, "PUT", {
    id: textMusicPutId.value,
    title: textMusicPutTitle.value,
    description: textMusicPutDescription.value,
  });
  result.innerHTML = JSON.stringify(json);
});
musicDeleteId.addEventListener("click", async () => {
  const json = await myFetch(`api/music/${textMusicDeleteId.value}`, "DELETE");
  result.innerHTML = JSON.stringify(json);
});
musicDelete.addEventListener("click", async () => {
    const json = await myFetch(`api/music`, "DELETE");
    result.innerHTML = JSON.stringify(json);
});

const myFetch = async (url, metod, body) => {
  result.innerHTML = "";
  let response = await fetch(`http://localhost:5000/${url}`, {
    method: metod,
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};
