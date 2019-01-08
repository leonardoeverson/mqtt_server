use strict";

const mqtt = require('mqtt');

const usersCount = 2000;
const usersPergroup = 10;
const userMessagePerSecond = 10;

const userMessageInterval = 1000 / userMessagePerSecond;
const groupsCount = usersCount / usersPergroup;

console.log(`user message interval: ${userMessageInterval}`);
console.log(`count of groups: ${groupsCount}`);

for (var groupId = 0; groupId < groupsCount; groupId++) {
    const groupTopic = `test/group/${groupId}`;
    for (var userId = groupId * usersPergroup; userId < (groupId + 1) * usersPergroup; userId++) {
        runUserClient(userId, groupTopic);
    }
}

function runUserClient(userId, groupTopic) {
    const userClient = mqtt.connect('mqtt://localhost', {
        clientId: `highload-test-${userId}`,
        clean: false
    });

    userClient.on('connect', function () {
        console.log(`user ${userId} connected`);
        userClient.subscribe(groupTopic);
        console.log(`user ${userId} subscribed to group topic ${groupTopic}`);

        var messageNumber = 1;
        setInterval(function () {
            const message = `from ${userId} - ${messageNumber}th message`;
            userClient.publish(groupTopic, message, {
                qos: 0
            });
            messageNumber++;
        }, userMessageInterval);

    });

    userClient.on('reconnect', function () {
        console.log(`user ${userId} reconnecting`);
    });

    userClient.on('offline', function () {
        console.log(`user ${userId} offline`);
    });

    userClient.on('error', function (error) {
        console.log(`user ${userId} client error: ${error}`);
    });

    // userClient.on('message', function (topic, message) {
    //     console.log(`user ${userId} received message: ${message}`);
    // });
}