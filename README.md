This project demonstrates an advanced use of Hardhat.It aims to perform the following functions:
 
 To fork the mainnet.
 Interact with an ERC20 Token and get the balance.
 Perfom an account impersonation with an address that has interacted with the contract.
 Grant the address the right to sign transactions.
 Access the mapping that holds the balances of each address.
 Get the location of the mapping in storage.


## To test this code out, do the following:

yarn hardhat compile
yarn hardhat run scripts/deploy.ts


 ## Environment Variables 
 check out the .env.example file
 
 POLYGON_RPC_URL - you can get this either on moralis or alchemy,just create an app and choose your network
 PRIVATE_KEY 
 CONTRACT_ADDRESS
 OWNER_ADDRESS 