import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);
  const contract = await ethers.getContractFactory("UnsupportedProtocol");
  const response = await contract.deploy();
  console.log("deployed to:", response.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
