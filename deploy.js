const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Token = await hre.ethers.getContractFactory("SimpleToken");
  // Deploying with Name: "BuildToken", Symbol: "BTK", Supply: 1,000,000
  const initialSupply = hre.ethers.parseEther("1000000");
  const token = await Token.deploy("BuildToken", "BTK", initialSupply);

  console.log("Token deployed to:", await token.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
