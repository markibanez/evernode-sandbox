# evernode-sandbox
Sandbox to play with Evernode

# Getting Started with HotPocket Developer Kit (hpdevkit)
## Use this to develop and test HotPocket smart contracts and client apps on your local machine.
1. Install Docker https://docs.docker.com/engine/install/
2. Install NodeJS https://nodejs.org/en/
3. Make sure Docker daemon is running
4. Install HotPocket developer kit globally with `npm i hpdevkit -g`
5. Create a HotPocket smart contract with `hpdevkit gen nodejs starter-contract hello`. In this case, we're creating a smart contract called `hello`.
6. Cd into the contract directory with `cd hello` and run `npm install`, then `npm start`
7. If everything went well, you should see logs in the terminal like
```powershell
20230414 01:13:26.094 [inf][hpc] Not enough peers proposing to perform consensus. votes:2 needed:3
20230414 01:13:27.852 [inf][hpc] ****Ledger created**** (lcl:315-68f3a2f8 state:cd37be02 patch:61261ed3)
20230414 01:13:28.980 [inf][hpc] ****Ledger created**** (lcl:316-86159375 state:cd37be02 patch:61261ed3)
20230414 01:13:30.853 [inf][hpc] ****Ledger created**** (lcl:317-10ca9a51 state:cd37be02 patch:61261ed3)
```
8. Create a HotPocket client app with `hpdevkit gen nodejs blank-client hello-client`. In this case, we're creating a client app called `hello-client`.
9. Cd into the client app directory with `cd hello-client` and run `npm install`, then `node hello-client.js`
10. If everything went well, you should see logs in the terminal like
```powershell
Connecting to wss://localhost:8081
Connected to wss://localhost:8081
HotPocket Connected.
```

# Getting Started with Evernode Developer Kit (evdevkit)
## Use this to deploy your HotPocket smart contracts Evernode hosts
1. Install Evernode developer kit globally with `npm i evdevkit -g`
2. cd into the contract directory with `cd hello`
3. Set EV_TENANT_SECRET and EV_USER_PRIVATE_KEY. The account for EV_TENANT_SECRET must be on the hooks v3 testnet and you can generate an account at https://dashboard.evernode.org/#/testnet-faucet
```powershell
# EV_TENANT_SECRET is the tenant XRPL account secret
# EV_USER_PRIVATE_KEY is the private key of the contract client (can be generated using `evdevkit gen key`)

# Windows (command prompt)
set EV_TENANT_SECRET="snmyH19JLWVaUJKtM4cNxTT6t38eA"
set EV_USER_PRIVATE_KEY="ed7b78ba4ffc9b7a55e427ff1ddb799ab1af59c6a9ab92e5f227815b04ab70e346831653e22c8293afac43694879c4083e1d7581b4326fcba423e3392e068028fe"

# Windows (powershell)
$env:EV_TENANT_SECRET="snmyH19JLWVaUJKtM4cNxTT6t38eA"
$env:EV_USER_PRIVATE_KEY="ed7b78ba4ffc9b7a55e427ff1ddb799ab1af59c6a9ab92e5f227815b04ab70e346831653e22c8293afac43694879c4083e1d7581b4326fcba423e3392e068028fe"

# Linux (bash)
export EV_TENANT_SECRET="snmyH19JLWVaUJKtM4cNxTT6t38eA"
export EV_USER_PRIVATE_KEY="ed7b78ba4ffc9b7a55e427ff1ddb799ab1af59c6a9ab92e5f227815b04ab70e346831653e22c8293afac43694879c4083e1d7581b4326fcba423e3392e068028fe"
```
4. Acquire an Evernode instance with `evdevkit acquire`. You should get an instance JSON in the response like below
```javascript
Instance created! {
  name: '04AC37D2B478F739B5FFB9F7A2B87203A083882975FC096B4C37E2E260BC5DF1',
  ip: 'fxrpl.dev',
  pubkey: 'ed2e336983e144d53b44c83edcb2a9d3381eaca61b494fd69c3bb52a2d7f557561',
  contract_id: 'f0ce01fb-04e5-4e33-a69e-f4e0dc5ad5a4',
  peer_port: '22861',
  user_port: '26201'
}
```
5. Deploy the contract with `acquire-and-deploy [options] <contract-path> <contract-bin>`. See example below
```powershell
#contract-path is current directory (. = /hello in this case)
#contract-bin is the command to run the contract (node -a .\src\hello.js)
evdevkit acquire-and-deploy . node -a .\src\hello.js
```