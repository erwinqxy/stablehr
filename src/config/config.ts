import {NetworkEnum} from "@1inch/fusion-sdk";

export const pk = "de9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0";
export const authKey = "MWPBGvuSf0d1xqHEZEaJr8tGhwproJCn";
export const ethNetworkRPC = "http://127.0.0.1:8545/";
export const maticPolyAddress = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"
export const ethPolyAddress = "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619";
export const senderAddress = '0xdD2FD4581271e230360230F9337D5c0430Bf44C0';
export const receiverAddress = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';
// export const OneInchRouter = '0x1111111254EEB25477B68fb85Ed929f73A960582';
// export const TokenAmount = '10000000000000000000'; // 10 inch tokens
export const network = NetworkEnum.POLYGON;

export async function sleep(ms: number) {
    return await new Promise(resolve => setTimeout(resolve, ms));
}