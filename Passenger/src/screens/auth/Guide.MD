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

### To get a users

```
get serverUrl/v1/api/user/:id
```

> Note that this id is not the id provided by the mongo db it is rather the id which is returned when the user is logged in and it is also the id stored in the async storage it is user_id not \_id.

### To delete one the users

```
delete serverUrl/v1/api/user/:id
```

### To update a users

```
patch serverUrl/v1/api/user/
```
