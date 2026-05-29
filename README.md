# videobelajar API Postman Testing Template

.env

```
DB_NAME=videobelajar
DB_USER=root
DB_PASSWORD=Pumpedupkick1!
DB_HOST=localhost
DB_PORT=3306
SERVER_PORT=3000
JWT_SECRET=blablabla
JWT_EXPIRES_IN=1d
EMAIL_USER=collin.padberg19@ethereal.email
EMAIL_PASS=yYbBZG555XUtsSPSyA
EMAIL_HOST=smtp.ethereal.email
EMAIL_PORT=587
```

Create Dummy Data

```
npm run seed
```

---

# AUTH ENDPOINTS

## REGISTER (PUBLIC)

```
POST /auth/register
```

Body (JSON):

```
{
  "fullname": "Agung Test",
  "email": "agung@test.com",
  "password": "123456",
  "country_code": "+62",
  "phone_number": "812345678"
}
```

Response:

```
{
  "success": true,
  "message": "Register success",
  "data": {
    "id_user": 1,
    "fullname": "Agung Test",
    "email": "agung@test.com"
  }
}
```

---

## VERIFY EMAIL (PUBLIC)

```
GET /auth/verify-email?token=xxxxx
```

Response:

```
{
  "success": true,
  "message": "Email Verified Successfully"
}
```

---

## LOGIN (PUBLIC)

```
POST /auth/login
```

Body (JSON):

```
{
  "email": "agung@test.com",
  "password": "123456"
}
```

Response:

```
{
  "success": true,
  "message": "Login success",
  "data": {
    "token": "JWT_TOKEN",
    "user": {
      "id_user": 1,
      "fullname": "Agung Test",
      "email": "agung@test.com",
      "role": "student"
    }
  }
}
```

---

# COURSE ENDPOINTS

## GET ALL COURSES (PUBLIC)

```
GET /course
```

Query Params (optional):

```
/course?search=react&kategori=1&sort=price&order=DESC
```

---

## GET COURSE BY ID (PUBLIC)

```
GET /course/:id
```

Example:

```
/course/1
```

---

## CREATE COURSE (ADMIN ONLY)

```
POST /course
```

Headers:

```
Authorization: Bearer <TOKEN>
```

Body (JSON):

```
{
  "title": "React JS Basic",
  "description": "Learn React from zero to hero",
  "price": 150000,
  "id_tutor": 1,
  "id_kategori": 2,
  "thumbnail": "/uploads/react.jpg"
}
```

Response:

```
{
  "success": true,
  "message": "Course created",
  "data": {
    "id_kelas": 1,
    "title": "React JS Basic",
    "description": "Learn React from zero to hero",
    "price": 150000,
    "id_tutor": 1,
    "id_kategori": 2,
    "thumbnail": "/uploads/1780005710237-3x4.jpg"
  }
}
```

---

## UPDATE COURSE (ADMIN ONLY)

```
PATCH /course/:id
```

Headers:

```
Authorization: Bearer <TOKEN>
```

Body (JSON):

```
{
  "title": "React JS Advanced",
  "description": "Updated course content",
  "price": 200000,
  "id_kategori": 3
}
```

Response:

```
{
  "success": true,
  "message": "Course updated"
}
```

---

## DELETE COURSE (ADMIN ONLY)

```
DELETE /course/:id
```

Headers:

```
Authorization: Bearer <TOKEN>
```

Response:

```
{
  "success": true,
  "message": "Course deleted"
}
```

---

# UPLOAD ENDPOINT

## UPLOAD IMAGE

```
POST /upload
```

Body (form-data):

```
file = (File)
```

Header:

```
Authorization: Bearer <TOKEN>
```

Response:

```
{
  "success": true,
  "message": "File uploaded successfully",
  "data": {
    "filename": "123-cat.jpg",
    "path": "/uploads/123-cat.jpg"
  }
}
```

---

# REVIEW ENDPOINTS

## GET REVIEWS (PUBLIC)

```
GET /review
```

---

# USER ENDPOINTS

## GET USERS (ADMIN ONLY)

```
GET /user
```

Headers:

```
Authorization: Bearer <TOKEN>
```

---

## UPDATE USER (ADMIN ONLY)

```
PATCH /user/:id
```

Headers:

```
Authorization: Bearer <TOKEN>
```

---

## DELETE USER (ADMIN ONLY)

```
DELETE /user/:id
```

Headers:

```
Authorization: Bearer <TOKEN>
```

---

# ACCESS CONTROL MATRIX

| Endpoint           | Method | Access        |
| ------------------ | ------ | ------------- |
| /auth/register     | POST   | Public        |
| /auth/login        | POST   | Public        |
| /auth/verify-email | GET    | Public        |
| /course            | GET    | Public        |
| /course/:id        | GET    | Public        |
| /course            | POST   | Admin         |
| /course/:id        | PATCH  | Admin         |
| /course/:id        | DELETE | Admin         |
| /upload            | POST   | Auth Required |
| /review            | GET    | Public        |
| /user              | GET    | Admin         |
| /user/:id          | PATCH  | Admin         |
| /user/:id          | DELETE | Admin         |
