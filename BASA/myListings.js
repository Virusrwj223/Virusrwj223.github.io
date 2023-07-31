import { ethers } from "./ethers-5.6.esm.min.js";
import { abi, contractAddress } from "./constants.js";

const time_input = document.querySelector("#time");
const rental_input = document.querySelector("#monthly-rental");
const myButton = document.querySelector(".submit-btn");
//const list = document.querySelector("#left_hand");

createListing();
myButton.onclick = appendListing;

async function appendListing() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const rentalDuration = document.getElementById("time").value;
  const rentalDeposit = document.getElementById("deposit").value;
  const monthlyRental = document.getElementById("monthly-rental").value;
  if (typeof window.ethereum != "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    try {
      const transactionResponse = await contract.newListing(
        accounts[0],
        rentalDuration,
        rentalDeposit,
        monthlyRental
      );
      document.getElementById("createListing").innerHTML = "Creating...";
      await listenForTransactionMine(transactionResponse, provider);
      document.getElementById("createListing").innerHTML = "Create Listing";
      location.reload();
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

async function createListing() {
  if (typeof window.ethereum != "undefined") {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    for (let i = 1; i < 10; i++) {
      const listing = await contract.personToLandlord(accounts[0], i);
      if (listing[1] != 0) {
        if (listing[4] == 1 || listing[4] == 2) {
          console.log(ethers.utils.formatEther(listing[4]));
          var time = ethers.utils.formatEther(listing[1]) * 10 ** 18;
          var deposit = ethers.utils.formatEther(listing[2]);
          var monthlyrental = ethers.utils.formatEther(listing[3]) * 10 ** 18;

          var main_listings_box = document.getElementById("main-listings-box");
          const float_child = document.createElement("div");
          main_listings_box.appendChild(float_child);
          float_child.setAttribute("class", "float-child");
          //float_child.setAttribute("id", "left_hand");
          const feature_product_box = document.createElement("div");
          float_child.appendChild(feature_product_box);
          feature_product_box.setAttribute("class", "feature-product-box");
          const product_feature_img = document.createElement("div");
          feature_product_box.appendChild(product_feature_img);
          product_feature_img.setAttribute("class", "product-feature-img");
          const house_image = document.createElement("img");
          product_feature_img.appendChild(house_image);
          house_image.setAttribute("class", "house-image");
          house_image.src = "HomePageModernHouse.jpg";
          const product_feature_text_container = document.createElement("div");
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
          rental_cost.innerHTML = "Ξ " + monthlyrental + "/mth";
          const lower_summary_description = document.createElement("div");
          summary_description.appendChild(lower_summary_description);
          lower_summary_description.setAttribute(
            "class",
            "lower-summary-description"
          );
          const rental_duration = document.createElement("p");
          lower_summary_description.appendChild(rental_duration);
          rental_duration.innerHTML = time + " mths";
          const del = document.createElement("div");
          product_feature_text_container.appendChild(del);
          product_feature_text.setAttribute("class", "delete");
          const del_btn = document.createElement("button");
          del.appendChild(del_btn);
          del_btn.setAttribute("class", "delete-button");
          del_btn.innerHTML = "Delete";
          del_btn.id = accounts[0] + "_" + i;
          const id = accounts[0] + "_" + i;
          del_btn.onclick = function () {
            deleteListing(id);
          };
        }
      } else {
        break;
      }
    }
  } else {
    window.location.href = "https://www.google.com.sg/";
  }
}

async function deleteListing(clicked_id) {
  console.log(clicked_id);
  if (typeof window.ethereum != "undefined") {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(contractAddress, abi, signer);
    const landlord_address = clicked_id.split("_")[0];
    const token_id = clicked_id.split("_")[1];
    const transactionResponse = await contract.deactivateListing(
      landlord_address,
      token_id
    );
    document.getElementById(clicked_id).innerHTML = "Deleting...";
    listenForTransactionMine(transactionResponse, provider);
  }
}
/*
  if (time_input.value != "" && rental_input.value != "") {
    //e.preventDefault();
    //const myLi = document.createElement("li");
    //myLi.innerHTML = inputText.value;
    //list.appendChild(myLi);
    var main_listings_box = document.getElementById("main-listings-box");
    const float_child = document.createElement("div");
    main_listings_box.appendChild(float_child);
    float_child.setAttribute("class", "float-child");
    //float_child.setAttribute("id", "left_hand");
    const feature_product_box = document.createElement("div");
    float_child.appendChild(feature_product_box);
    feature_product_box.setAttribute("class", "feature-product-box");
    const product_feature_img = document.createElement("div");
    feature_product_box.appendChild(product_feature_img);
    product_feature_img.setAttribute("class", "product-feature-img");
    const house_image = document.createElement("img");
    product_feature_img.appendChild(house_image);
    house_image.setAttribute("class", "house-image");
    house_image.src = "/Images/HomePageModernHouse.jpg";
    const product_feature_text_container = document.createElement("div");
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
    rental_cost.innerHTML = "Rent: " + "$" + rental_input.value + "/month";
    const lower_summary_description = document.createElement("div");
    summary_description.appendChild(lower_summary_description);
    lower_summary_description.setAttribute(
      "class",
      "lower-summary-description"
    );
    const rental_duration = document.createElement("p");
    lower_summary_description.appendChild(rental_duration);
    rental_duration.innerHTML = "Duration: " + time_input.value + " months";
    const del = document.createElement("div");
    product_feature_text_container.appendChild(del);
    product_feature_text.setAttribute("class", "delete");
    const del_btn = document.createElement("button");
    del.appendChild(del_btn);
    del_btn.setAttribute("class", "delete-button");
    del_btn.innerHTML = "Delete";
  }*/
