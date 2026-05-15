const express = require('express');
const cors = require('cors');
 const routes = require('./routes.js/todoRoutes.js');

const mongoose = require('mongoose');
const live_url = "mongodb://Dev_Faith:Mmasinachi@ac-qsq3gks-shard-00-00.rgetafs.mongodb.net:27017,ac-qsq3gks-shard-00-01.rgetafs.mongodb.net:27017,ac-qsq3gks-shard-00-02.rgetafs.mongodb.net:27017/AuthenticationDB?ssl=true&replicaSet=atlas-17z6tn-shard-0&authSource=admin&appName=Cluster0";
const local_url = "mongodb://localhost:27017/AuthenticationDB";

mongoose
     .connect(live_url)
     //(local_url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/todos", routes);

    app.get('/', (req, res) => {
        res.send('Hello World!');
    });
    const port = 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });

   