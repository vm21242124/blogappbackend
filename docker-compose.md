docker-compose up -d

docker-compose exec mongo mongo -u root -p example

Here is a comprehensive list of MongoDB shell commands you can use to manage your databases and collections. These commands are executed in the MongoDB shell.

Here is a comprehensive list of MongoDB shell commands you can use to manage your databases and collections. These commands are executed in the MongoDB shell.

### General Commands

- **Show databases**:

  ```sh
  show dbs
  ```

- **Use a specific database** (creates the database if it doesn't exist):

  ```sh
  use myDatabase
  ```

- **Show collections in the current database**:

  ```sh
  show collections
  ```

- **Show users**:

  ```sh
  show users
  ```

### Database Operations

- **Create a new database** (by switching to it and performing an operation):

  ```sh
  use myNewDatabase
  ```

- **Drop a database**:

  ```sh
  db.dropDatabase()
  ```

### Collection Operations

- **Create a new collection**:

  ```sh
  db.createCollection("myCollection")
  ```

- **Drop a collection**:

  ```sh
  db.myCollection.drop()
  ```

- **Rename a collection**:

  ```sh
  db.myCollection.renameCollection("myNewCollection")
  ```

- **Get collection stats**:

  ```sh
  db.myCollection.stats()
  ```

### Document Operations

- **Insert a single document**:

  ```sh
  db.myCollection.insertOne({ name: "John Doe", age: 30 })
  ```

- **Insert multiple documents**:

  ```sh
  db.myCollection.insertMany([{ name: "Alice", age: 25 }, { name: "Bob", age: 28 }])
  ```

- **Find all documents in a collection**:

  ```sh
  db.myCollection.find()
  ```

- **Find documents with a query**:

  ```sh
  db.myCollection.find({ age: { $gt: 25 } })
  ```

- **Find a single document**:

  ```sh
  db.myCollection.findOne({ name: "Alice" })
  ```

- **Update a single document**:

  ```sh
  db.myCollection.updateOne({ name: "John Doe" }, { $set: { age: 31 } })
  ```

- **Update multiple documents**:

  ```sh
  db.myCollection.updateMany({ age: { $gt: 25 } }, { $set: { status: "active" } })
  ```

- **Replace a document**:

  ```sh
  db.myCollection.replaceOne({ name: "John Doe" }, { name: "John Doe", age: 32, status: "active" })
  ```

- **Delete a single document**:

  ```sh
  db.myCollection.deleteOne({ name: "John Doe" })
  ```

- **Delete multiple documents**:

  ```sh
  db.myCollection.deleteMany({ age: { $gt: 25 } })
  ```

### Indexing Operations

- **Create an index**:

  ```sh
  db.myCollection.createIndex({ name: 1 })
  ```

- **Drop an index**:

  ```sh
  db.myCollection.dropIndex({ name: 1 })
  ```

- **List all indexes in a collection**:

  ```sh
  db.myCollection.getIndexes()
  ```

### Aggregation Operations

- **Simple aggregation example**:

  ```sh
  db.myCollection.aggregate([
    { $match: { status: "active" } },
    { $group: { _id: "$age", count: { $sum: 1 } } }
  ])
  ```

### User Management

- **Create a new user**:

  ```sh
  db.createUser({
    user: "myUser",
    pwd: "myPassword",
    roles: [ { role: "readWrite", db: "myDatabase" } ]
  })
  ```

- **Drop a user**:

  ```sh
  db.dropUser("myUser")
  ```

### Backup and Restore

- **Export data to a file** (from command line, not Mongo shell):

  ```sh
  mongoexport --db=myDatabase --collection=myCollection --out=myCollection.json --jsonArray
  ```

- **Import data from a file** (from command line, not Mongo shell):

  ```sh
  mongoimport --db=myDatabase --collection=myCollection --file=myCollection.json --jsonArray
  ```

### Miscellaneous Commands

- **Get current database name**:

  ```sh
  db.getName()
  ```

- **Get server status**:

  ```sh
  db.serverStatus()
  ```

- **Get current operations**:

  ```sh
  db.currentOp()
  ```

This list covers most of the commonly used MongoDB shell commands. Depending on your needs, you might use only a subset of these commands.