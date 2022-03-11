const result = document.getElementById('result');

const authorPost = document.getElementById('author/post/');
const authorGetMusic = document.getElementById('author/get/music');
const authorGetMusicId = document.getElementById('author/get/music/Id');
const authorGetLike = document.getElementById('author/get/like');
const authorGetAll = document.getElementById('author/get/');
const authorGetId = document.getElementById('author/get/id');
const authorPut = document.getElementById('author/put/');
const authorDeleteId = document.getElementById('author/delete/id');
const authorDelete = document.getElementById('author/delete/');

const textAuthorPost = document.getElementById('text-author/post/');
const textAuthorGetMusicById = document.getElementById('text-author/get/music/Id');
const textAuthorGetLIkeName = document.getElementById('text-author/get/like/name');
const textAuthorGetLIkeDate = document.getElementById('text-author/get/like/name');
const textAuthorGetId = document.getElementById('text-author/get/id');
const textAuthorPut = document.getElementById('text-author/put/');
const textAuthorDeleteId = document.getElementById('text-author/delete/id');
const textAuthorGetAuthorId = document.getElementById('text-author/get/authorId');
const textAuthorGetMusicId = document.getElementById('text-author/get/musicId');
const textAuthorGetLimit = document.getElementById('text-author/get/limit');
const textAuthorGetPage = document.getElementById('text-author/get/page');

authorPost.addEventListener('click', () => {
    console.log('12121');
})
authorGetMusic.addEventListener('click', () => {
    console.log('12121');
})
authorGetMusicId.addEventListener('click', () => {
    console.log('12121');
})
authorGetLike.addEventListener('click', () => {
    console.log('12121');
})
authorGetAll.addEventListener('click', async () => {
    const json = await myFetch('http://localhost:5000/api/author');
    console.log(json);
    result.innerHTML  = JSON.stringify(json.rows);
})
authorGetId.addEventListener('click', () => {
    console.log('12121');
})
authorPut.addEventListener('click', () => {
    console.log('12121');
})
authorDeleteId.addEventListener('click', () => {
    console.log('12121');
})
authorDelete.addEventListener('click', () => {
    console.log('12121');
})







const musicPost = document.getElementById('music/post/');
const musicGetLike = document.getElementById('music/get/like');
const musicGetAll = document.getElementById('music/get/');
const musicGetId = document.getElementById('music/get/id');
const musicPut = document.getElementById('music/put/');
const musicDeleteId = document.getElementById('music/delete/id');
const musicDelete = document.getElementById('music/delete/');

musicPost.addEventListener('click', () => {
    console.log('12121');
})
musicGetLike.addEventListener('click', () => {
    console.log('12121');
})
musicGetAll.addEventListener('click', () => {
    console.log('12121');
})
musicGetId.addEventListener('click', () => {
    console.log('12121');
})
musicPut.addEventListener('click', () => {
    console.log('12121');
})
musicDeleteId.addEventListener('click', () => {
    console.log('12121');
})
musicDelete.addEventListener('click', () => {
    console.log('12121');
})

const myFetch = async (url) => {
    const response = await fetch(url);
    return await response.json();
}