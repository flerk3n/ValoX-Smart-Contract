const hre = require("hardhat");

async function main() {
  const NightMarket = await hre.ethers.getContractFactory("NightMarket");
  const nightMarket = await NightMarket.deploy();

  await nightMarket.deployed();

  console.log(
    `Deployed with address ${nightMarket.address}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});