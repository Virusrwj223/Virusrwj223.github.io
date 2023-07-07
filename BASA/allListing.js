import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

createListing();

async function createListing() {
  if (typeof window.ethereum != "undefined") {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const num_users = Number(
      ethers.utils.formatEther(await contract.numUsers()) * 10 ** 18
    );
    for (let i = 0; i < num_users; i++) {
      const address = await contract.registeredAddresses(i);
      for (let i = 1; i < 10; i++) {
        const listing = await contract.personToLandlord(address, i);
        if (listing[1] != 0) {
          if (listing[4] == 2) {
            const rental_duration =
              ethers.utils.formatEther(listing[1]) * 10 ** 18;
            const deposit = ethers.utils.formatEther(listing[2]) * 10 ** 18;
            const monthly_rental =
              ethers.utils.formatEther(listing[3]) * 10 ** 18;

            var main_listings_box =
              document.getElementById("main-listings-box");
            const feature_product_box = document.createElement("div");
            main_listings_box.appendChild(feature_product_box);
            feature_product_box.setAttribute("class", "feature-product-box");

            const product_feature_img = document.createElement("div");
            feature_product_box.appendChild(product_feature_img);
            product_feature_img.setAttribute("class", "product-feature-img");

            const house_image = document.createElement("img");
            product_feature_img.appendChild(house_image);
            house_image.setAttribute("class", "house-image");
            house_image.src = "HomePageModernHouse.jpg";

            const product_feature_text_container =
              document.createElement("div");
            feature_product_box.appendChild(product_feature_text_container);
            product_feature_text_container.setAttribute(
              "class",
              "product-feature-text-container"
            );

            const product_feature_text = document.createElement("div");
            product_feature_text_container.appendChild(product_feature_text);
            product_feature_text.setAttribute("class", "product-feature-text");

            const summary_description = document.createElement("div");
            product_feature_text.appendChild(summary_description);
            summary_description.setAttribute("class", "summary-description");

            const upper_summary_description = document.createElement("div");
            summary_description.appendChild(upper_summary_description);
            upper_summary_description.setAttribute(
              "class",
              "upper-summary-description"
            );

            const rental_cost = document.createElement("p");
            upper_summary_description.appendChild(rental_cost);
            rental_cost.innerHTML = "Ξ " + monthly_rental + "/mth";

            const lower_summary_description = document.createElement("div");
            summary_description.appendChild(lower_summary_description);
            upper_summary_description.setAttribute(
              "class",
              "lower-summary-description"
            );

            const duration = document.createElement("p");
            lower_summary_description.appendChild(duration);
            duration.innerHTML = rental_duration + " mths";

            const buyBtn = document.createElement("button");
            product_feature_text_container.appendChild(buyBtn);
            buyBtn.setAttribute("class", "buy-button");
            buyBtn.innerHTML = "BUY";
            buyBtn.id = address + "_" + i;
            const id = address + "_" + i;
            buyBtn.onclick = function () {
              setRentalDetails(id);
            };
          }
        } else {
          break;
        }
      }
    }
  } else {
    window.location.href = "https://www.google.com.sg/";
  }
}

async function setRentalDetails(clicked_id) {
  document.getElementById(clicked_id).innerHTML = "Buying...";
  if (typeof window.ethereum != "undefined") {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const landlord_address = clicked_id.split("_")[0];
    const token_id = clicked_id.split("_")[1];
    const renter_address = accounts[0];
    const listing = await contract.personToLandlord(landlord_address, token_id);
    const time = ethers.utils.formatEther(listing[1]) * 10 ** 18;
    const deposit = ethers.utils.formatEther(listing[2]) * 10 ** 18;
    const monthlyrental = ethers.utils.formatEther(listing[3]) * 10 ** 18;
    try {
      const transactionResponse = await contract.firstPurchase(
        renter_address,
        landlord_address,
        time,
        deposit,
        monthlyrental,
        token_id
      );
      listenForTransactionMine(transactionResponse, provider);
      document.getElementById(clicked_id).innerHTML = "Bought";
    } catch (error) {
      document.getElementById(clicked_id).innerHTML = "Buy";
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

/*
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

async function setRentalDetails(time, deposit, monthlyRent) {
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
*/
