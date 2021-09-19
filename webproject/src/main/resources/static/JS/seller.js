//JavaScript to validate the seller form

//**TO DELETE *//
document.querySelector('#inputName').value = "Anthony";
document.querySelector("#inputCompany").value = "Tan Ah Kow Pte Ltd"
document.querySelector("#inputAddr").value = "Istana";
document.querySelector("#inputAddrUnit").value = "the whole place";
document.querySelector("#inputAddrPostal").value = "656565";
document.querySelector("#inputEmail").value = "tanahKOW@TAK.com";
document.querySelector("#inputMobileNum").value = "658888888";
document.querySelector("#inputItemDescription").value = "iPhone 20";
document.querySelector("#inputListPrice").value = "2000";
document.querySelector("#inputGroupDiscount").value = "15";
document.querySelector("#inputMinQty").value = "100";
document.querySelector("#inputOfferPeriod").value = "3";
document.querySelector("#inputReferralCode").value = "1806123";
document.querySelector("#inputCommunityOrgz").value = "1920765";
document.querySelector("#inputCompanyDescription").value = "Tan Ah Kow is a fake company";
//**TO DELETE BLOCK ABOVE *//




const formList = [];
let checkboxChecked = [];
let isChecked = false;
let isRadioSelected = false;
let delivery = "";
const checkboxes = document.querySelectorAll("input[type=checkbox]");


function addForm() {

    console.log("In the function");
    const name = document.querySelector("#inputName").value;
    const company = document.querySelector("#inputCompany").value;
    const address = document.querySelector("#inputAddr").value;
    const addressUnit = document.querySelector("#inputAddrUnit").value;
    const addressPostal = document.querySelector("#inputAddrPostal").value;
    const email = document.querySelector("#inputEmail").value;
    const mobileNum = document.querySelector("#inputMobileNum").value;
    const itemCategory = document.querySelector("#inputItemCategory").value;
    const itemDescription = document.querySelector("#inputItemDescription").value;
    const listPrice = document.querySelector("#inputListPrice").value;
    const GroupDiscount = document.querySelector("#inputGroupDiscount").value;
    const imagesSeller1 = document.getElementById("imageSeller1").value;
    const imagesSeller2 = document.getElementById("imageSeller2").value;
    const imagesSeller3 = document.getElementById("imageSeller3").value;
    const minQty = document.querySelector("#inputMinQty").value;
    const offerPeriod = document.querySelector("#inputOfferPeriod").value;
    const effectiveDate = document.querySelector("#inputEffectiveDate").value;
    const CommunityOrgz = document.querySelector("#inputCommunityOrgz").value;
    const referralCode = document.querySelector("#inputReferralCode").value;
    const CompanyDescription = document.querySelector("#inputCompanyDescription").value;

    //For the drop down menus======================================
    const itemValue = document.querySelector("#inputItemCategory").value;
    const selectArea = document.querySelector("#area").value;
    const deliveryServices = document.querySelector("#deliveryServices").value;

    const isItemSelected = validateItemDropDown();
    const isAreaSelected = validateAreaDropDown();
    const isDeliverySelected = validateDeliveryDropDown();


    if (!isItemSelected) {
        console.log('item not selected');
        document.querySelector("#inputItemCategory").setCustomValidity("Please selct one item");
        document.querySelector("#inputItemCategory").reportValidity();
       
        const selectItem = document.getElementById("inputItemCategory");
        selectItem.addEventListener("change", () => {
            console.log('in the selectItem event listener');
            document.querySelector("#inputItemCategory").setCustomValidity("");
            document.querySelector("#area").reportValidity();
        })

    } else if (!isAreaSelected) {
        console.log('else if - area not selected');
        document.querySelector("#area").setCustomValidity("Please select one area");
        document.querySelector("#area").reportValidity();

        const selectArea = document.getElementById("area");
        selectArea.addEventListener("change", () => {
            console.log('in the area event listener');
            document.querySelector("#area").setCustomValidity("");
            document.querySelector("#area").reportValidity();
        })

    } else if (!isDeliverySelected) {
        console.log('delivery not selected');
        document.querySelector("#deliveryServices").setCustomValidity("Please select one delivery services item");
        document.querySelector("#deliveryServices").reportValidity();

        const selectDelivery = document.getElementById("deliveryServices");
        selectDelivery.addEventListener("change", () => {
            console.log('in the selectDelivery event listener');
            document.querySelector("#deliveryServices").setCustomValidity("");
            document.querySelector("#deliveryServices").reportValidity();

        })

    } else {
        console.log("in the else statement - able to submit");

        //end For the drop down menus====================================

        checkWeeks(inputOfferPeriod);
        
        console.log("Form is submitted");
        alert('Form Succesfully Submitted');
        window.location.replace("http://127.0.0.1:5501/bevybuy/seller_completeReg.html#")
        return true;



        addToList(name, company, address, addressUnit, addressPostal, email, mobileNum, itemCategory, itemDescription, listPrice, GroupDiscount, minQty, offerPeriod, effectiveDate, CommunityOrgz, referralCode, CompanyDescription, selectArea, deliveryServices, imagesSeller1, imagesSeller2, imagesSeller3, itemValue);
    }
}

//***************end of addForm***************/



//======Functions=============================//
function checkWeeks(inputOfferPeriod) {
    if (inputOfferPeriod > 9 || inputOfferPeriod < 1); {
        alert: ("Offer period should be between 1 week and 6 weeks")
    }
};


function validateItemDropDown() {
    return (document.querySelector("#inputItemCategory").selectedIndex === 0) ? false : true;
}


function validateDeliveryDropDown() {
    return (document.querySelector("#deliveryServices").selectedIndex === 0) ? false : true;
}



function validateAreaDropDown() {
    return (document.querySelector("#area").selectedIndex === 0) ? false : true;
}


function addToList(name, company, address, addressUnit, addressPostal, email, mobileNum, itemCategory, itemDescription, listPrice, GroupDiscount, minQty, offerPeriod, effectiveDate, CommunityOrgz, referralCode, CompanyDescription, selectArea, deliveryServices, imagesSeller1, imagesSeller2, imagesSeller3, itemValue) {

    const item = {
        name: name,
        company: company,
        address: address,
        addressUnit: addressUnit,
        addressPostal: addressPostal,
        email: email,
        mobileNum: mobileNum,
        itemCategory: itemCategory,
        itemDescription: itemDescription,
        listPrice: listPrice,
        GroupDiscount: GroupDiscount,
        minQty: minQty,
        offerPeriod: offerPeriod,
        effectiveDate: effectiveDate,
        CommunityOrgz: CommunityOrgz,
        referralCode: referralCode,
        CompanyDescription: CompanyDescription,
        itemValue: itemValue,
        selectArea: selectArea,
        deliveryService: deliveryServices,
        imagesSeller1: imagesSeller1,
        imagesSeller2: imagesSeller2,
        imagesSeller3: imagesSeller3
    };

    formList.push(item);
    
    console.log('in the add to list');
    

    clearForm();

    console.log(`Total submission: ${formList.length}: `, formList);
    console.log(item);
}

//========set min & max effective dates====//
const today = new Date();
let todayDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
let nextMonthDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 3)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2); // use today.getMonth() + 2 to get next month instead

document.getElementById("inputEffectiveDate").setAttribute("min", todayDate);
document.getElementById("inputEffectiveDate").setAttribute("max", nextMonthDate);


function clearForm() {
    const name = document.querySelector("#inputName").value = "";
    const company = document.querySelector("#inputCompany").value = "";
    const address = document.querySelector("#inputAddr").value = "";
    const addressUnit = document.querySelector("#inputAddrUnit").value = "";
    const addressPostal = document.querySelector("#inputAddrPostal").value = "";
    const email = document.querySelector("#inputEmail").value = "";
    const mobileNum = document.querySelector("#inputMobileNum").value = "";
    const itemCategory = document.querySelector("#inputItemCategory").value = "Select";
    const itemDescription = document.querySelector("#inputItemDescription").value = "";
    const listPrice = document.querySelector("#inputListPrice").value = "";
    const GroupDiscount = document.querySelector("#inputGroupDiscount").value = "";
    const imagesSeller1 = document.getElementById("imageSeller1").value = "";
    const imagesSeller2 = document.getElementById("imageSeller2").value = "";
    const imagesSeller3 = document.getElementById("imageSeller3").value = "";
    const minQty = document.querySelector("#inputMinQty").value = "";
    const offerPeriod = document.querySelector("#inputOfferPeriod").value = "";
    const effectiveDate = document.querySelector("#inputEffectiveDate").value = "";
    const CommunityOrgz = document.querySelector("#inputCommunityOrgz").value = "";
    const referralCode = document.querySelector("#inputReferralCode").value = "";
    const CompanyDescription = document.querySelector("#inputCompanyDescription").value = "";
    const selectArea = document.querySelector("#area").selectedIndex = 0;
    const deliveryService = document.querySelector("#deliveryServices").selectedIndex = 0;
    const itemValue = document.querySelector("#inputItemCategory").selectedIndex = 0;

    document.querySelector("#radio_agree").checked = false;
};

