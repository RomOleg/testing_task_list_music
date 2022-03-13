# testing_task_list_music
## Technology stack
> NodeJS, Express, PostgreSQL, Sequelize
## install 
> npm install
## start
1. copy file .default.env and rename .env
2. npm run start
3. npm run dev - for development
## api
#### api/author
> GET
1. GET api/author/music - get author with list music
1. GET api/author/like - get author on like names and date
1. GET api/author/ - get all author
1. GET api/author/:id - get author on id
> POST
1. POST api/author/ - create author (name)
> PUT
1. PUT api/author/ - update author (id, title, desctioption)
> DELETE
1. DELETE api/author/ - delete all author
1. DELETE api/author/:id - delete author on id
#### api/music
> GET
1. GET api/music/like - get music on like names and date
1. GET api/music/ - get all music
1. GET api/music/:id - get music on id
> POST
1. POST api/music/ - create music (title, description, authorId)
> PUT
1. PUT api/music/ - update music (id, title, desctioption)
> DELETE
1. DELETE api/music/ - delete all music
1. DELETE api/music/:id - delete music on id
