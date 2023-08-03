import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const fundingPage = document.getElementById("withdrawPage");
const withdrawingPage = document.getElementById("fundPage");
const x = document.getElementById("fundingPage");
const y = document.getElementById("withdrawingPage");
const z = document.getElementById("btn");

fundingPage.onclick = fundding;
withdrawingPage.onclick = withdrawwing;

async function fundding() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
async function withdrawwing() {
  console.log("here");
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

const fundButton = document.getElementById("fundButton");
const withdrawButton = document.getElementById("withdrawButton");
const rentPaymentButton = document.getElementById("payButton");
const earlyTerminateButton = document.getElementById("terminateButton");

fundButton.onclick = fund;
withdrawButton.onclick = withdraw;

getBalance();
getRentalStatus();

async function getBalance() {
  if (typeof window.ethereum != "undefined") {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const balance = await contract.personToRenter(accounts[0], accounts[0]);

    document.getElementById("amountBalanceView").innerHTML = String(
      ethers.utils.formatEther(balance[6])
    );
    console.log(ethers.utils.formatEther(balance[6]));
  } else {
    //window.location.href = "https://www.google.com.sg/";
    //document.getElementById("amountBalanceView").innerHTML = 0;
  }
}

async function fund() {
  const ethAmount = document.getElementById("fundingAmount").value;
  console.log("funding with ${ethAmount}...");
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionresponse = await contract.deposit({
        value: ethers.utils.parseEther(ethAmount),
      });
      document.getElementById("fundButton").innerHTML = "Funding...";
      await listenForTransactionMine(transactionresponse, provider);
      document.getElementById("fundButton").innerHTML = "Fund";
      getBalance();
      console.log("done!");
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
      location.reload();
      resolve();
    });
  });
}

async function withdraw() {
  console.log("here");
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const ethAmount = document.getElementById("withdrawingAmount").value;
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.withdraw(
        accounts[0],
        ethers.utils.parseEther(ethAmount)
      );
      document.getElementById("withdrawButton").innerHTML = "Withdrawing...";
      await listenForTransactionMine(transactionResponse, provider);
      document.getElementById("withdrawButton").innerHTML = "Withdraw";
      getBalance();
    } catch (error) {
      console.log(error);
    }
  }
}

async function getRentalStatus() {
  if (typeof window.ethereum != "undefined") {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const person = await contract.personToRenter(accounts[0], accounts[0]);

    if (person[7] == false) {
      document.getElementById("rent-payment-indicator").innerHTML =
        "Please start a rental";
      document.getElementById("termination_status").innerHTML =
        "Please start a rental";
    } else {
      if (Date.now() >= ethers.utils.formatEther(person[2]) * 10 ** 21) {
        document.getElementById("rent-payment-indicator").innerHTML =
          "Rent is due";
        document.getElementById("termination_status").innerHTML =
          "Please clear rent";
        rentPaymentButton.onclick = payRent;
      } else if (Date.now() >= ethers.utils.formatEther(person[4]) * 10 ** 21) {
        document.getElementById("rent-payment-indicator").innerHTML =
          "Thanks for renting! Please click button to confirm termination";
        document.getElementById("termination_status").innerHTML = "Terminate";
        earlyTerminateButton.onclick = earlyTerminate;
      } else {
        document.getElementById("rent-payment-indicator").innerHTML =
          "Please wait for time to pay rent";
        document.getElementById("termination_status").innerHTML = "All Good!";
        earlyTerminateButton.onclick = earlyTerminate;
      }
    }
  } else {
    document.getElementById("rent-payment-indicator").innerHTML =
      "Please purchase rental";
    document.getElementById("rent-payment-button").innerHTML =
      "Please purchase rental";
    document.getElementById("termination_status").innerHTML =
      "Please purchase rental";
  }
}

async function earlyTerminate() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  //const extAddress = document.getElementById("AccAddress").value;
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.earlyTerminateRental(
        accounts[0]
      );
      await listenForTransactionMine(transactionResponse, provider);
      getBalance();
    } catch (error) {
      console.log(error);
    }
  }
}

async function payRent() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  //const extAddress = document.getElementById("AccAddress").value;
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.payMonthlyRent(accounts[0]);
      await listenForTransactionMine(transactionResponse, provider);
      getBalance();
    } catch (error) {
      console.log(error);
    }
  }
}
