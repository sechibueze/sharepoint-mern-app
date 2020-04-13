# EDUCATUS-MERN-APP

> A collaboration platform for educators to learn, reflect and share

# API Docs

## User signup
> POST 201 public /api/users 

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