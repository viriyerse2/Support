const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("zkEVM", function () {
    it("Should estimate gas correctly", async function () {
        const zkEVM = await ethers.getContractFactory("zkEVM");
        const instance = await zkEVM.deploy();
        const gasEstimate = await instance.estimateGas();
        expect(gasEstimate).to.be.above(0);
    });
});