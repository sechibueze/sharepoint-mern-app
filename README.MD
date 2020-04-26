# Sharepoint Community Network

> A collaboration platform for professionals (educators & developers) to learn, reflect, connect and share ideas & resources with others

# API Docs 
> [see Sharepoint API live](https://sharepoint-v1-api.herokuapp.com/)

> [see Sharepoint  Live App](https://sharepoint.netlify.app/)

> Always pick what you want from the returned data. Some keys may not be relevant to your application. You may use Object destructuring.

> All private endpoint would be assessed by sending a valid JWT in the `x-auth-token` key


> Developed By: [Samuel Chibueze](https://sechibueze.github.io)
## User stories

- User signup
- User login
- User CRUD profile `CRUD education & experience`
- User CRUD post `like & unlike, comment & remove comment`
- User CRUD courses `Next update`

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

### Get user by token
> GET 200 private /api/auth
<pre><code>
{
  "status": true,
  "message": "current user",
  "data": {
    "id": "5e95db30c90c692054640e4e",
    "name": "Test Tester",
    "email": "test@test.com",
    "avatar": "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=150&d=mm&r=pg"
  }
}
</code></pre>

### Get LoggedIn User Profile
> POST 200 private /api/profiles/me

`Header => x-auth-token : <valid token>` 
<pre><code>
</code></pre>
<pre><code>
{
  "status": false,
  "message": "Current user profile",
  "data": {
    "socials": {
      "facebook": "https://facebook.com/sechibueze",
      "linkedin": "linkedin,xom/in/sechibueze",
      "twitter": "twitter.com/sechibueze",
      "instagram": "https://instagram.com/sechibueze"
    },
    "bio": "A smart developer from Nigeria",
    "company": "Lightworth Computing",
    "location": "11 Olatunji Sango, Otta",
    "website": "https://sechibueze.github.io",
    "githubusername": "sechibueze",
    "skills": [
      " HTML",
      " CSS"
    ],
    "_id": "5e95bdf3cca8f805c460b14e",
    "user": {
      "avatar": "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=150&d=mm&r=pg",
      "_id": "5e95bd98a15105191400c284",
      "name": "Test Tester",
      "email": "test@test.com"
    },
    "__v": 0,
    "status": true,
    "experience": [],
    "education": [],
    "date": "2020-04-14T14:12:17.529Z"
  }
}
</code></pre>

### Get All User profiles
> POST 200 public /api/profiles
<pre><code>
{
  "status": false,
  "message": "All user profiles",
  "data": [
    {
      "socials": {
        "facebook": "https://facebook.com/sechibueze",
        "linkedin": "linkedin,xom/in/sechibueze",
        "twitter": "twitter.com/sechibueze",
        "instagram": "https://instagram.com/sechibueze"
      },
      "bio": "A smart developer from Nigeria",
      "company": "Lightworth Computing",
      "location": "11 Olatunji Sango, Otta",
      "website": "https://sechibueze.github.io",
      "githubusername": "sechibueze",
      "skills": [
        " HTML",
        " CSS"
      ],
      "_id": "5e95bdf3cca8f805c460b14e",
      "user": "5e95bd98a15105191400c284",
      "__v": 0,
      "status": true,
      "experience": [],
      "education": [],
      "date": "2020-04-14T14:28:42.280Z"
    }
  ]
}
</code></pre>

### Get User profile by user_id
> GET 200 public /api/profiles/users/:user_id
<pre><code>
{
  "status": false,
  "message": "User profile",
  "data": {
    "socials": {
      "facebook": "https://facebook.com/sechibueze",
      "linkedin": "linkedin,xom/in/sechibueze",
      "twitter": "twitter.com/sechibueze",
      "instagram": "https://instagram.com/sechibueze"
    },
    "bio": "A smart developer from Nigeria",
    "company": "Lightworth Computing",
    "location": "11 Olatunji Sango, Otta",
    "website": "https://sechibueze.github.io",
    "githubusername": "sechibueze",
    "skills": [
      " HTML",
      " CSS"
    ],
    "_id": "5e95bdf3cca8f805c460b14e",
    "user": {
      "avatar": "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=150&d=mm&r=pg",
      "_id": "5e95bd98a15105191400c284",
      "name": "Test Tester",
      "email": "test@test.com"
    },
    "__v": 0,
    "status": true,
    "experience": [],
    "education": [],
    "date": "2020-04-14T14:46:12.151Z"
  }
}
</code></pre>

### UPDATE Education field in Profile
> PUT 200 private /api/profiles/education
<pre><code>
{
  "school": "FUTO",
 	 "degree": "B.SC",
  "fieldofstudy": "Computer Science",
  "from": "25-09-2009",
  "to": "25-01-2015",
  "current": true,
  "description": "Study in the bes"
}
</code></pre>
<pre><code>
{
  "status": false,
  "message": "User Education data updated",
  "data": {
    "socials": {
      "facebook": "https://facebook.com/sechibueze",
      "linkedin": "linkedin,xom/in/sechibueze",
      "twitter": "twitter.com/sechibueze",
      "instagram": "https://instagram.com/sechibueze"
    },
    "bio": "A smart developer from Nigeria",
    "company": "Lightworth Computing",
    "location": "11 Olatunji Sango, Otta",
    "website": "https://sechibueze.github.io",
    "githubusername": "sechibueze",
    "skills": [
      " HTML",
      " CSS"
    ],
    "_id": "5e95dc0acca8f805c460c12b",
    "user": "5e95db30c90c692054640e4e",
    "__v": 1,
    "status": true,
    "experience": [],
    "education": [
      {
        "current": false,
        "_id": "5e95dddc75837d21908d96eb",
        "school": "FUTO",
        "degree": "B.SC",
        "fieldofstudy": "Computer Science",
        "from": "25-09-2009",
        "to": "25-01-2015",
        "description": "Study in the bes"
      }
    ],
    "date": "2020-04-14T15:59:24.768Z"
  }
}
</code></pre>

### UPDATE Experience field in Profile
> PUT 200 private /api/profiles/experience
<pre><code>
{
  "title": "Developer",
  "company": "Lightworth Computing",
  "location": "Lagos",
  "from": "25-09-2009",
  "to": "25-01-2015",
  "current": true,
  "description": "Build websites"
}
</code></pre>
<pre><code>
{
  "status": false,
  "message": "User Experience data updated",
  "data": {
    "socials": {
      "facebook": "https://facebook.com/sechibueze",
      "linkedin": "linkedin,xom/in/sechibueze",
      "twitter": "twitter.com/sechibueze",
      "instagram": "https://instagram.com/sechibueze"
    },
    "bio": "A smart developer from Nigeria",
    "company": "Lightworth Computing",
    "location": "11 Olatunji Sango, Otta",
    "website": "https://sechibueze.github.io",
    "githubusername": "sechibueze",
    "skills": [
      " HTML",
      " CSS"
    ],
    "_id": "5e95dc0acca8f805c460c12b",
    "user": "5e95db30c90c692054640e4e",
    "__v": 3,
    "status": true,
    "date": "2020-04-14T15:59:24.768Z",
    "education": [
      {
        "current": false,
        "_id": "5e95dddc75837d21908d96eb",
        "school": "FUTO",
        "degree": "B.SC",
        "fieldofstudy": "Computer Science",
        "from": "25-09-2009",
        "to": "25-01-2015",
        "description": "Study in the bes"
      }
    ],
    "experience": [
      {
        "current": false,
        "_id": "5e95e03c2eeb6621f46fe91a",
        "title": "Developer",
        "company": "Lightworth Computing",
        "location": "Lagos",
        "from": "25-09-2009",
        "to": "25-01-2015",
        "description": "Build websites"
      },
      {
        "current": false,
        "_id": "5e95e0332eeb6621f46fe919",
        "title": "Developer",
        "company": "Lightworth Computing",
        "location": "Lagos",
        "from": "25-09-2009",
        "to": "25-01-2015",
        "description": "Build websites"
      }
    ]
  }
}
</code></pre>


### DELETE Education field in Profile
> DELETE 200 private /api/profiles/education/:edu_id
<pre><code>

</code></pre>
<pre><code>
> Returns the updated profile
</code></pre>

### DELETE Experience field in Profile
> DELETE 200 private /api/profiles/experience/:edu_id
<pre><code>

</code></pre>
<pre><code>
> Returns the updated profile
</code></pre>

### DELETE current user profile, user account & Posts
> DELETE 200 private /api/profiles
<pre><code>
{
  "status": true,
  "message": "Record successfully deleted"
}
</code></pre>

## Posts

### Create a post
> POST 201 private /api/posts
<pre><code>
{
	"content": "This is my second post"
}
</code></pre>
<pre><code>
{
  "status": true,
  "message": "New Post created",
  "data": {
    "name": "Test Tester",
    "avatar": "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=150&d=mm&r=pg",
    "_id": "5e984742bbe3e50cb402f5be",
    "user": "5e95db30c90c692054640e4e",
    "content": "This is my second post",
    "likes": [],
    "comments": [],
    "date": "2020-04-16T11:53:38.731Z",
    "__v": 0
  }
}
</code></pre>

### Get All Posts
> GET 200 private /api/posts
<pre><code>

</code></pre>
<pre><code>

</code></pre>

### Get Post by ID 
> GET 200 private /api/posts/:id
<pre><code>

</code></pre>
<pre><code>
{
  "status": true,
  "message": "Found Post",
  "data": {
    "name": "Test Tester",
    "avatar": "https://s.gravatar.com/avatar/b642b4217b34b1e8d3bd915fc65c4452?s=150&d=mm&r=pg",
    "_id": "5e984742bbe3e50cb402f5be",
    "user": "5e95db30c90c692054640e4e",
    "content": "This is my second post",
    "likes": [],
    "comments": [],
    "date": "2020-04-16T11:53:38.731Z",
    "__v": 0
  }
}
</code></pre>

### Delete a Post
> DELETE 200 private /api/posts/id
<pre><code>

</code></pre>
<pre><code>

</code></pre>

### Like a Post
> PUT 200 private /api/posts/like/:post_id
<pre><code>
</code></pre>

### Unlike a Post
> PUT 200 private /api/posts/unlike/:post_id
<pre><code>
</code></pre>

### Comment on  a Post
> POST 201 private /api/posts/comments/:post_id
<pre><code>
</code></pre>

### Delete a comment on a post a Post
> PUT 200 /api/posts:/post_id/comments/:comment_id
<pre><code>
</code></pre>

# Packages
- Express
- JWT
- Bcryptjs
- Express Validators

# Resources

- [JSON WEb Token](https://jwt.io/)