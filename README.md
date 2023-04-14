# evernode-sandbox
Sandbox to play with Evernode

# Getting Started
1. Install Docker https://docs.docker.com/engine/install/
2. Install NodeJS https://nodejs.org/en/
3. Make sure Docker daemon is running
4. Install HotPocket developer kit globally with `npm i hpdevkit -g`
5. Create a HotPocket smart contract with `hpdevkit gen nodejs starter-contract hello`. In this case, we're creating a smart contract called `hello`.
6. Cd into the contract directory with `cd hello` and run `npm install`, then `npm start`
7. If everything went well, you should see logs in the terminal like
```
20230414 01:13:26.094 [inf][hpc] Not enough peers proposing to perform consensus. votes:2 needed:3
20230414 01:13:27.852 [inf][hpc] ****Ledger created**** (lcl:315-68f3a2f8 state:cd37be02 patch:61261ed3)
20230414 01:13:28.980 [inf][hpc] ****Ledger created**** (lcl:316-86159375 state:cd37be02 patch:61261ed3)
20230414 01:13:30.853 [inf][hpc] ****Ledger created**** (lcl:317-10ca9a51 state:cd37be02 patch:61261ed3)
```
8. Create a HotPocket client app with `hpdevkit gen nodejs blank-client hello-client`. In this case, we're creating a client app called `hello-client`.
9. Cd into the client app directory with `cd hello-client` and run `npm install`, then `node hello-client.js`
10. If everything went well, you should see logs in the terminal like
```
Connecting to wss://localhost:8081
Connected to wss://localhost:8081
HotPocket Connected.
```