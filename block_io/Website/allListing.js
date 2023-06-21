import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const buyButton = document.getElementById("buyButton");
const buyButton1 = document.getElementById("buyButton1");
const buyButton2 = document.getElementById("buyButton2");

buyButton.onclick = function () {
  setRentalDetails(6, 50, 100);
};
buyButton1.onclick = function () {
  setRentalDetails(6, 50, 100);
};
buyButton2.onclick = function () {
  setRentalDetails(6, 50, 100);
};

async function setRentalDetails(/*time, deposit, monthlyRent*/) {
  console.log("clicked");
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  //const ethAmount = rentDeposit;
  //const extAddress = document.getElementById("AccAddress").value;
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.firstPurchase(
        accounts[0],
        6,
        50,
        100
      );
      await listenForTransactionMine(transactionResponse, provider);
      console.log("purchased");
    } catch (error) {
      console.log(error);
    }
  }
}
function listenForTransactionMine(transactionResponse, provider) {
  console.log("Mining ${transactionResponse.hash}...");
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        "Completed with ${transactionReceipt.confirmations} confirmations"
      );
      resolve();
    });
  });
}
