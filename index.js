//Connection to redis and express
const express = require('express');
const app=express();
const redis = require("redis");
const client = redis.createClient();

//Pub Sub with Redis Client config
const RedisSub = client.duplicate();
RedisSub.connect();
const listener = (message, channel) => {
    console.log(`Message received. Channel: ${channel}, Message: ${message}`);
}
RedisSub.subscribe('my-channel', listener);

app.listen(3000, () => console.log('Listening on port 3000'));
