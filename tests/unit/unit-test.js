const { expect } = require("chai");
const { ethers } = require("hardhat");
const{ describe}=require("chai")

describe("GasCalculatorAndAddressBook", function() {
  let gasCalculator;
  let owner;

  beforeEach(async function() {
    [owner] = await ethers.getSigners();
    const GasCalculatorAndAddressBook = await ethers.getContractFactory("GasCalculatorAndAddressBook");
    gasCalculator = await GasCalculatorAndAddressBook.deploy();
    await gasCalculator.deployed();
  });

  it("should add and remove addresses from the address book", async function() {
    const address1 = "0x1234567890123456789012345678901234567890";
    const address2 = "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd";
    const address3 = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    await gasCalculator.addAddress(address1);
    await gasCalculator.addAddress(address2);
    await gasCalculator.addAddress(address3);
    expect(await gasCalculator.getArrayLength()).to.equal(3);
    expect(await gasCalculator.getAddressCount(address1)).to.equal(1);
    expect(await gasCalculator.getAddressCount(address2)).to.equal(1);
    expect(await gasCalculator.getAddressCount(address3)).to.equal(1);
    await gasCalculator.removeAddress(address2);
    expect(await gasCalculator.getArrayLength()).to.equal(2);
    expect(await gasCalculator.getAddressCount(address1)).to.equal(1);
    expect(await gasCalculator.getAddressCount(address2)).to.equal(0);
    expect(await gasCalculator.getAddressCount(address3)).to.equal(1);
  });

  it("should return the top addresses in the address book", async function() {
    const address1 = "0x1234567890123456789012345678901234567890";
    const address2 = "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd";
    const address3 = "0xaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
    await gasCalculator.addAddress(address1);
    await gasCalculator.addAddress(address2);
    await gasCalculator.addAddress(address3);
    const topAddresses = await gasCalculator.getTopAddresses(2);
    expect(topAddresses.length).to.equal(2);
    expect(topAddresses[0]).to.equal(address1);
    expect(topAddresses[1]).to.equal(address3);
  });

  it("should calculate the correct gas fee", async function() {
    const amount = ethers.utils.parseEther("1");
    const gasFee = await gasCalculator.calculateGasFee(amount);
    expect(gasFee).to.be.gt(0);
  });
});
