# api-auth


Install

clone the repo: https://github.com/ksamirw3/api-auth.git

npm install

npm start

login endpoint

POST localhost:3000/users/login

Params

Key: username

Value: karim

Key: password

Value: 123456

Respose: { "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiS2FyaW0iLCJsYXN0X25hbWUiOiJTYW1pciIsImVtYWlsIjoia2Fyc2FtNTU1QHlhaG9vLmNvbSIsImlkIjoxMjMsImlhdCI6MTQ2Njk3ODkwOCwiZXhwIjoxNDY2OTk2OTA4fQ.v2CBuTe5960IKkOa8CBJ-EcVvLlSvogxIyBcjwv8VX8" }

organizations endpoint

GET localhost:3000/organizations

Header Params

Key: Authorization

Value: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdF9uYW1lIjoiS2FyaW0iLCJsYXN0X25hbWUiOiJTYW1pciIsImVtYWlsIjoia2Fyc2FtNTU1QHlhaG9vLmNvbSIsImlkIjoxMjMsImlhdCI6MTQ2Njk3ODYxNSwiZXhwIjoxNDY2OTk2NjE1fQ.s9OIEzHB7ywKioDbXr2XXzxQBVlo_qNqhDoMjhcBD6k
