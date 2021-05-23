// We require the Hardhat Runtime Environment explicitly here. This is optional 
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const { ethers } = require("hardhat");
const { deploy } = require("./utils");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile 
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  // const ZombieFactory = await ethers.getContractFactory("ZombieFactory");
  // const ZombieFeeding = await ethers.getContractFactory("ZombieFeeding");
  // const ZombieHelper = await ethers.getContractFactory("ZombieHelper");
  // const ZombieAttack = await ethers.getContractFactory("ZombieAttack");
  // const ZombieOwnership = await ethers.getContractFactory("ZombieOwnership");

  // const factory = await ZombieFactory.deploy();
  // const feeding = await ZombieFeeding.deploy();
  // const helper = await ZombieHelper.deploy();
  // const attack = await ZombieAttack.deploy();
  // const ownership = await ZombieOwnership.deploy();

  // await factory.deployed();
  // await feeding.deployed();
  // await helper.deployed();
  // await attack.deployed();
  // await ownership.deployed();

  // console.log("factory address", factory.address);
  // console.log("feeding address", feeding.address);
  // console.log("helper address", helper.address);
  // console.log("attack address", attack.address);
  // console.log("ownership address", ownership.address);
  

  await deploy("ZombieFactory");
  await deploy("ZombieFeeding");
  await deploy("ZombieHelper");
  await deploy("ZombieAttack");
  await deploy("ZombieOwnership");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
