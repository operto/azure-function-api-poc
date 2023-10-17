# azure-function-api-poc
Azure GET/POST functions POC

## Run locally
### Step 1
Install the dependencies
```
npm i
```

### Step 2
Replace connection string in `local.settings.json`

### Step 3
Run the Azure functions
```
npm start
```

### Step 4
Test locally
#### POST (update json file to azure blob storage)
```
curl --location 'http://localhost:7071/api/post?Id=1234' \
--header 'Content-Type: application/json' \
--data '{
    "foo1": "bar1"
}'
```

#### GET (get json file from azure blob storage by giving Id)
```
curl --location 'http://localhost:7071/api/get?Id=1234'
```