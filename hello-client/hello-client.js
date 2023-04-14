const HotPocket = require('hotpocket-js-client');

async function clientApp() {

    const userKeyPair = await HotPocket.generateKeys();
    const client = await HotPocket.createClient(['wss://localhost:8081'], userKeyPair);

    // Establish HotPocket connection.
    if (!await client.connect()) {
        console.log('Connection failed.');
        return;
    }

    console.log('HotPocket Connected.');

    const setResponse = client.set

    console.log('Set response: ' + JSON.stringify(setResponse));

    const getResponse = client.submitContractInput({
        type: 'get'
    });

    console.log('Get response: ' + JSON.stringify(getResponse));
}

clientApp();