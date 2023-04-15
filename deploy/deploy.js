const{ethers, getNamedAccounts, network}=require("hardhat");
const{developmentChains}=require("../helper-hardhat-config");
const {env}=require("dotenv")
 module.exports=async({getNameAccounts,deployments})=>{
    console.log("heyyyyyyyyyyyyyyyyyyyyyyyyyy....")
    const {deployer}=await getNamedAccounts();
    const {deploy,log}=deployments;
    const ETHERSCAN_API_KEY=process.env.ETHERSCAN_API_KEY;

    /**
     * 
    const gasCalculatorBook=await ethers.getContract("GasCalculatorAndAddressBook")

    const transactionResponse=await gasCalculatorBook.deploy()
    console.log("deploying...")

    const transactionReceipt=await transactionResponse.wait(1)
     console.log("deployed....")
     */


    const etherBook=await deploy("GasCalculatorAndAddressBook",{
        from:deployer,
        args:[],
        log:true,
        waitConfirmations:1,
    });
    /**
     * 
    if(!developmentChains.includes(network.name)&& ETHERSCAN_API_KEY){
        console.log("verifying....");
        await verify(etherBook.address(),[]);
    }
     */

 }
 module.exports.tags=["all","etherBook"];