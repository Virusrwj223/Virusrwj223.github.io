// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract test{

    address payable public myAccount;

    constructor() {
        myAccount = payable(msg.sender);
    }

    struct Landlord {
        uint listingNum;
        uint time;
        uint deposit;
        uint monthlyRental;
    }

    struct Renter {
        address payable rWalletAddress;
        string firstName;
        uint start;
        uint latestRentDue;
        uint rentNotificationReceived;
        uint end;
        bool hasRentPaid;
        uint depositAmount;
        bool hasActiveRental;
        uint rentalDeposit;
        uint monthlyRental;
    }

    //create renter
    struct Person {
        address payable rWalletAddress;
        Landlord landlordDetails;
        Renter RenterDetails;
        uint currentListingNum;
    }
    mapping(address => Person) public person;
    mapping(address => mapping(uint => Landlord)) public personToLandlord;
    mapping(address => mapping(address => Renter)) public personToRenter;



    function addPerson(
        address payable rWalletAddress,
        string memory firstName
    ) public {
        person[rWalletAddress] = Person(
            rWalletAddress,
            Landlord(0,0,0,0),
            Renter(rWalletAddress,firstName,0,0,0,0,false,0,false,0,0),
            0
        );
    }

    function newListing(address externaladdress, uint _time, uint _deposit, uint _monthlyRental) public {
        require(personToRenter[externaladdress][externaladdress].depositAmount>=50);
        personToRenter[externaladdress][externaladdress].depositAmount -= 50;
        personToLandlord[externaladdress][person[externaladdress].currentListingNum+1].listingNum=person[externaladdress].currentListingNum+1;
        personToLandlord[externaladdress][person[externaladdress].currentListingNum+1].time=_time;
        personToLandlord[externaladdress][person[externaladdress].currentListingNum+1].deposit=_deposit;
        personToLandlord[externaladdress][person[externaladdress].currentListingNum+1].monthlyRental=_monthlyRental;
        person[externaladdress].currentListingNum=person[externaladdress].currentListingNum+1;
    }


    function firstPurchase(address externaladdress, uint _rentDuration, uint _deposit, uint _monthlyRent) public{
        personToRenter[externaladdress][externaladdress].depositAmount-=_deposit;
        personToRenter[externaladdress][externaladdress].start=block.timestamp;
        personToRenter[externaladdress][externaladdress].end=block.timestamp+_rentDuration*86400;
        personToRenter[externaladdress][externaladdress].latestRentDue=block.timestamp+2629743;
        personToRenter[externaladdress][externaladdress].hasRentPaid=true;
        personToRenter[externaladdress][externaladdress].hasActiveRental=true;
        personToRenter[externaladdress][externaladdress].rentNotificationReceived = personToRenter[externaladdress][externaladdress].latestRentDue;
        personToRenter[externaladdress][externaladdress].rentalDeposit=_deposit;
        personToRenter[externaladdress][externaladdress].monthlyRental=_monthlyRent;
    }

    function deposit() public payable {
        personToRenter[msg.sender][msg.sender].depositAmount+=msg.value;
    }

    function withdraw(address payable externaladdress, uint256 _amount) payable public {
        externaladdress.transfer(_amount);
        personToRenter[externaladdress][externaladdress].depositAmount-=_amount;
    }

    function ownerWithdrawal(uint256 _amount) payable public{
        myAccount.transfer(_amount);
    }

    function payMonthlyRent(address externaladdress, uint _rentAmount) public {
        require(personToRenter[externaladdress][externaladdress].depositAmount>=_rentAmount);
        require(block.timestamp>=personToRenter[externaladdress][externaladdress].latestRentDue);
        personToRenter[externaladdress][externaladdress].depositAmount-=_rentAmount;
        personToRenter[externaladdress][externaladdress].hasRentPaid=true;
        personToRenter[externaladdress][externaladdress].latestRentDue=block.timestamp+2629743;

    }
    function earlyTerminateRental(address externaladdress, uint _rentAmount) public {
        uint256 overdueBalance=(_rentAmount/2629743)*(block.timestamp-(personToRenter[externaladdress][externaladdress].latestRentDue-2629743));
        require(personToRenter[externaladdress][externaladdress].depositAmount>=overdueBalance);
        require(personToRenter[externaladdress][externaladdress].hasRentPaid==true);
        personToRenter[externaladdress][externaladdress].depositAmount-=overdueBalance;
        personToRenter[externaladdress][externaladdress].hasActiveRental=false;
        personToRenter[externaladdress][externaladdress].hasRentPaid=false;
    }
    

}