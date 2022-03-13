# testing_task_list_music
## Technology stack
###### NodeJS, Express, PostgreSQL, Sequelize
## install 
###### npm install
## start
###### copy file .default.env and rename .env
###### npm run start
###### npm run dev - for development
## api
#### api/author
###### GET api/author/music - get author with list music
###### GET api/author/like - get author on like names and date
###### GET api/author/ - get all author
###### GET api/author/:id - get author on id
###### POST api/author/ - create author (name)
###### PUT api/author/ - update author (id, title, desctioption)
###### DELETE api/author/ - delete all author
###### DELETE api/author/:id - delete author on id
#### api/music
###### GET api/music/like - get music on like names and date
###### GET api/music/ - get all music
###### GET api/music/:id - get music on id
###### POST api/music/ - create music (title, description, authorId)
###### PUT api/music/ - update music (id, title, desctioption)
###### DELETE api/music/ - delete all music
###### DELETE api/music/:id - delete music on id
