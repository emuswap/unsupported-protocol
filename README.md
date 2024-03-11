# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```

# Deploy

```
npx hardhat compile

ZIRCUIT_PRIVATE_KEY="0x_PRIVATE_KEY_HERE"
npx hardhat run scripts/deploy.ts --network zircuit
```

```
Deploying contracts with the account: 0x2dC67c18B796586eA0BD2d0E011D79217E4aD972
deployed to: 0x003D0d8a8F2a5Acc8e400287FfC519837ad7C7e5
```