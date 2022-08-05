# Routes

_The guide shows how the auth works and also inclueds the routes with the output and input data to the route_

> The server url or the domain in the local host is http://10.0.2.2:3001 at least for me:

```
serverUrl = "http://10.0.2.2:3001"
```

## Routes.

### To get all the users

```
get serverUrl/v1/api/user/
```

### To delete all the users

```
delete serverUrl/v1/api/user/
```

> Note that this id is not the id provided by the mongo db it is rather the id which is returned when the user is logged in and it is also the id stored in the async storage it is user_id not \_id.

### To get a users

```
get serverUrl/v1/api/user/:id
```

### To delete one the users

```
delete serverUrl/v1/api/user/:id
```

### To update a users

```
patch serverUrl/v1/api/user/
```

# Expected user data model from the database

```
    "user_toc": {
        "date": String,
        "time": String
    },
    "_id": String, // id given by mongo db
    "user_id": String , // id given by google and facebook used to query the auth and user routes
    "user_name": String,
    "user_email": String or undefined,
    "user_address": String,
    "user_contact": String,
    "user_gfid": String , // access token given by google or facebook
    "user_image": String,
    "__v": 0
}
```

# Example of the data from the database

```
{

   "user_toc": {
       "date": "Aug 2nd 2022",
       "time": "10:08:36"
   },
   "_id": "62e8a8449e9ae16241040f66",
   "user_id": "108884798923453718918",
   "user_name": "Saroj regmi",
   "user_email": "sarojregmi.official@gmail.com",
   "user_address": "address",
   "user_contact": "9867100588",
   "user_gfid": "ya29.A0AVA9y1tyyrIKAkbyPUkurHA1rwH-ti_EsFvpyc3LPOSY9zQUEZ4KB5KhCth-bdsuanXLrtvEOS8oHAfww3fxInz20ndS7P43NdxjEmy2tJUR_JPaqm9GK48bR5aCMQ7tQqFIoHTI67SzxfmK2P6_qI6u8DveZ0MYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4cFNpT3VzTVJNa2lJcVVVM0FHNF9YUQ0166",
   "user_image": "http://10.0.2.2:3001/uploads\\471c3598-9ae7-4e0f-97ab-54151bc7d1a8depositphotos_22343351-Elegant-young-handsome-man..Multicolored-digital-painted-image-portrait-of-men-face..jpg",
   "__v": 0
}
```

# The data to be expected in the context is:

> this is the data you are going to get from the context and it is the one that must be mapped to the user profile and other section where logged in user is in use.

```
id: String, // _id from the database
email: String , // user email Note: if user is logged in using the facebook then this will be undefined
contact: String,
image: String,
name: String,
toc: {
    date: String,
    time: String,
},
userId: String, // This is the id that is used to query anything in the database or in any other routes this is the id that is actually used.

```
