# GraphQL Demo

A simple demo to illustrate the basic idea of GraphQL, implemented in Node.JS
using Apollo Server.

The server is not using an actual database, rather a variable stored in memory
during runtime. This is chosen for simplicity's sake.

## Running locally

To initiate the required dependency, run:

```bash
cd server && npm install
```

After this, the server instance can be run by executing the following command:

```bash
node server/src/index.js
```

## Folder structure - Server

- `data`: Collection of data that will serve as starting point of the server
  instance
- `model`: An abstraction over the raw data to interact with/manipulate the data
- `schema`: GraphQL schema files, including type definitions and resolvers
