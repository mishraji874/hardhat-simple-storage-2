const { task } = require("hardhat/config")


task("block-number", "Prints the current block number").setAction(
    async (taskArgs, hre) => {
        //const blockTask  async function() => {}
        //async function blockTask() {}

        const blockNumber = hre.ethers.provider.getBlockNumber()
        console.log(`Current block number: ${blockNumber}`)
    }
)