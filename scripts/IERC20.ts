import { BigNumber, BigNumberish } from "ethers";
import { ethers } from "hardhat";
import {CONTRACT_ADDRESS, OWNER_ADDRESS} from '../config/index';
async function script() {
    const contractAddress:string =  CONTRACT_ADDRESS
    const ownerAddress:string = OWNER_ADDRESS
    const fetchToken = await ethers.getContractAt("IERC20",contractAddress)

    const balance:BigNumber = await fetchToken.balanceOf(ownerAddress)
    console.log(balance)

    //Account Impersonation
    //@ts-ignore
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: [ownerAddress],
      });

      //granting owner address the ability to sign transactions
      const signer = await ethers.getSigner(ownerAddress)
      await fetchToken.connect(signer).transfer(ownerAddress, "1000")

      //encoding the address and uint256 to access the mapping in storage
      const mappingdata = new ethers.utils.AbiCoder().encode(["address", "uint256"], [ownerAddress,0])
      const position = ethers.utils.solidityKeccak256(["bytes"], [mappingdata]);
      //line 21-24 happened because we want to handle mappings in the contract.

      //converting from bytes to decimals
      const dec:BigNumberish =BigNumber.from(position);
      

      const data = await ethers.provider.getStorageAt(fetchToken.address, dec);
     console.log(`balance: ${data}`)
}

script().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });


