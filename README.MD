# EDUCATUS-MERN-APP

> A collaboration platform for educators to learn, reflect and share

# API Docs
[see Educatus API](https://educatus-mern-app.herokuapp.com/)

## User stories

- User signup
- User login
- User CRUD profile
- User CRUD post
- User CRUD courses <next update>
### User signup
> POST 201 public /api/signup

<pre><code>
{
	"name": "Test Tester",
	"email": "test@test.com",
	"password": "tester"
}
</code></pre>
<pre><code>
{
  "status": true,
  "message": "User signup successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOTQ5NDNmNDc3YmIzMmQxMDQzNDhlNSIsImlhdCI6MTU4Njc5NTU4NCwiZXhwIjoxNTg3MDExNTg0fQ.FvufNDtGi_q0hE1JUINcQlQmDHBsb1Q5kmpjKU_c05Q"
}
</code></pre>

### User login
> POST 200 public /api/login
<pre><code>
{
	"email": "test@test.com",
	"password": "tester"
}
</code></pre>
<pre><code>
{
  "status": true,
  "message": "User login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOTQ5NDNmNDc3YmIzMmQxMDQzNDhlNSIsImlhdCI6MTU4Njg1NTI5NSwiZXhwIjoxNTg3MDcxMjk1fQ.2uKjbjvTOfy24HfV2-o1Zc04j8YN_1zPHccFgRdEtYQ"
}
</code></pre>

### Get LoggedIn User
> POST 200 public /api/auth
`Header => x-auth-token : <valid token>` 
<pre><code>
{
	"email": "test@test.com",
	"password": "tester"
}
</code></pre>
<pre><code>
{
  "status": true,
  "message": "User login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlOTQ5NDNmNDc3YmIzMmQxMDQzNDhlNSIsImlhdCI6MTU4Njg1NTI5NSwiZXhwIjoxNTg3MDcxMjk1fQ.2uKjbjvTOfy24HfV2-o1Zc04j8YN_1zPHccFgRdEtYQ"
}
</code></pre>
# Packages
- Express
- JWT
- Bcryptjs
- Express Validators

# Resources

- [JSON WEb Token](https://jwt.io/)