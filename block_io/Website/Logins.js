import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

const loginPage = document.getElementById("loginPage");
const registerPage = document.getElementById("registerPage");
const x = document.getElementById("login");
const y = document.getElementById("register");
const z = document.getElementById("btn");

loginButton.onclick = login;
registerButton.onclick = register;

loginPage.onclick = loggin;
registerPage.onclick = registeration;

async function registeration() {
  x.style.left = "-400px";
  y.style.left = "50px";
  z.style.left = "110px";
}
async function loggin() {
  x.style.left = "50px";
  y.style.left = "450px";
  z.style.left = "0";
}

async function login() {
  if (typeof window.ethereum != "undefined") {
    console.log("here");
    await window.ethereum.request({ method: "eth_requestAccounts" });
    loginButton.innerHTML = "Connected!";
    const walletAddress = document.getElementById("walletAddress").value;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      console.log("wallet address is" + walletAddress);
      const transactionresponse = await contract.renters(walletAddress);
      if (walletAddress == transactionresponse[0]) {
        window.location.replace("payments.html");
      } else {
        loginButton.innerHTML = "Please Register!";
        console.log("please register");
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    loginButton.innerHTML = "Not Connected";
  }
}

async function register() {
  if (typeof window.ethereum != "undefined") {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    registerButton.innerHTML = "Connected!";

    const registerWalletAddress = document.getElementById(
      "registerWalletAddress"
    ).value;
    const firstName = document.getElementById("firstName").value;
    console.log(registerWalletAddress);
    console.log(firstName);

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const loginresponse = await contract.renters(registerWalletAddress);
    if (registerWalletAddress == loginresponse[0]) {
      window.location.replace("payments.html");
    } else {
      try {
        console.log("here");
        registerButton.innerHTML = "Please Wait...";
        const registerresponse = await contract.addPerson(
          registerWalletAddress,
          firstName,
          0,
          0,
          0,
          0,
          false,
          0,
          false,
          0,
          0
        );
        await listenForTransactionMine(registerresponse, provider);
        window.location.replace("payments.html");
      } catch (error) {
        console.log(error);
      }
    }
  } else {
    loginButton.innerHTML = "Not Connected";
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
