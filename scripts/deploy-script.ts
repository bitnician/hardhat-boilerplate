const { ethers } = require('hardhat');

async function main() {
  const arg = 'Hello';
  const Greeter = await ethers.getContractFactory('Greeter');
  const greeter = await Greeter.deploy(arg);

  await greeter.deployed();

  console.log('🚧 Greeter deployed to:', greeter.address);
  console.log('✅ npx hardhat verify --network bsctest', greeter.address, arg);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
