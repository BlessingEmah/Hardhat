import * as dotenv from "dotenv";
dotenv.config();

export const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || '';
export const OWNER_ADDRESS = process.env.OWNER_ADDRESS || '';