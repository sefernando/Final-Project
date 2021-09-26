console.log("service page");

//create instance of an product controller class
const productController = new ProductController();




//************ to delete **************/
//adding hardcorded product values
productController.addItem(
  "ipad",
  "Some quick example text to build on the card title.",
  "https://source.unsplash.com/1600x900/?ipad-12.9",
  "https://source.unsplash.com/1600x900/?ipad-mini",
  "https://source.unsplash.com/1600x900/?ipad",
  "10.0034",
  "10",
  "3",
  "Deliver to individual buyers",
  "100",
  "anthony",
  "D01",
  "2021-10-20"
);

productController.addItem(
  "iphone",
  "Some quick example.",
  "https://source.unsplash.com/1600x900/?iphone",
  "https://source.unsplash.com/1600x900/?iphone8",
  "https://source.unsplash.com/1600x900/?iphonex",
  "20.00",
  "5",
  "4",
  "community organizer",
  "200",
  "fernando",
  "D02",
  "2021-09-20"
);

productController.addItem(
  "food",
  "Some quick example text to build on the card title and make up the bulk of the card's content the bulk of the card's content.",
  "https://source.unsplash.com/1600x900/?rice",
  "https://source.unsplash.com/1600x900/?fruit",
  "https://source.unsplash.com/1600x900/?vegetables",
  "4",
  "12",
  "5",
  "Deliver to community organizer or central location",
  "10",
  "anthony",
  "D01",
  "2021-09-12"
);

productController.addItem(
  "baby pram",
  "Some quick example text to build on the card title ank of the card's content.",

  "https://source.unsplash.com/1600x900/?baby-clothes",
  "https://source.unsplash.com/1600x900/?mittens",
  "https://source.unsplash.com/1600x900/?baby-pram",

  "210.00",
  "4",
  "6",
  "Pick up by the individual buyer or community organizer",
  "50",
  "lydia",
  "D01",
  "2021-08-30"
);

productController.addItem(
  "bicycle",
  "Some quick example text to build on the card title and make up.",

  "https://source.unsplash.com/1600x900/?bicycle",
  "https://source.unsplash.com/1600x900/?bmw-bike",
  "https://source.unsplash.com/1600x900/?kids-bike",

  "90.00",
  "3",
  "8",
  "organizer",
  "25",
  "hazrul",
  "D02",
  "2021-09-20"
);

//expired item
productController.addItem(
  "test expired",
  "Some quick example text to build on the card title ank of the card's content.",

  "https://source.unsplash.com/1600x900/?baby-clothes",
  "https://source.unsplash.com/1600x900/?mittens",
  "https://source.unsplash.com/1600x900/?baby-pram",

  "210.00",
  "10",
  "4",
  "central location",
  "50",
  "lydia",
  "D01",
  "2021-06-30"
);

// create HTML element and return the card
const createHTMLCard = (linkID, item, expireDay, sellingPrice) => `
    <div class="product-item-wrapper col-lg-4 col-md-6 col-sm-12">
      <div class="card h-100">
        <img
          src="${item.imageUrl1}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${item.itemName}</h5>
          <p class="card-text">${item.description}</p>
          <a
            id="${linkID}"
            href="#"
            class="card-link text-center"
            data-toggle="modal"
            data-target="#productModal"
            >View more</a
          >
        </div>
        <ul class="list-group list-group-flush border-bottom-0">
          <li class="list-group-item"><b>Retail Price: </b>$ ${item.price}</li>
          <li class="list-group-item"><b>Group Discount: </b>${item.discount}%</li>
          <li class="list-group-item h5"><b>Selling Price: </b> <span class="text-danger">$ ${sellingPrice}</span></li>
        </ul>
        <div id="card-footer" class="card-footer ">${expireDay}</div>
      </div>
    </div>
`;

//get product items from productController class
const productItems = productController.getItems();
console.log("productItems   ", productItems);

//display productItems on the webpage
function displayItem() {
  const productHTMLList = [];

  //creating array of product cards
  productItems.forEach((item, index) => {

    //calculate selling price after discount
    let sellingPrice = item.price * ((100 - item.discount) / 100);
    sellingPrice = (Math.round((sellingPrice * 1000) / 10) / 100).toFixed(2)  //(Math.round(num*100)/100).toFixed(2)

    //formating the price to two decimal places
    item.price = (Math.round((item.price * 1000) / 10) / 100).toFixed(2);

    //get the expired items and add those are not expired to createHTMLCard
    const startDate = new Date(item.effectiveDate);
    const OfferPeriod = item.offerPeriod;

    let expiryDate = checkDateValidity(startDate, OfferPeriod);

    if (expiryDate != "expired") {
      const prductHTML = createHTMLCard(index, item, expiryDate, sellingPrice);
      //console.log("card  ", prductHTML);
      productHTMLList.push(prductHTML);
    }
  });

  //append the cards created by to the #row id
  const pHTML = productHTMLList.join("\n");
  //console.log(pHTML)
  document.querySelector("#product-row").innerHTML = pHTML;

  //create a loop to add the event listner to "View more" button in the card
  productItems.forEach((item, index) => {
    //get the expired items and add those are not expired to model
    const startDate = new Date(item.effectiveDate);
    const OfferPeriod = item.offerPeriod;

    let expiryDate = checkDateValidity(startDate, OfferPeriod);

    if (expiryDate != "expired") {
      document.getElementById(index).addEventListener("click", () => {
        displayProductDetails(item);

        //disabling the "Join the group" button for items are not stated offering
        if (expiryDate.substring(6, 12) === "starts") {
          document.getElementById("join-btn").disabled = true;
          document.getElementById("join-btn").innerHTML = "Please Come Back to Join";
          document.getElementById("join-btn").className = "btn btn-secondary";
          document.getElementById("close-button").className = "btn btn-primary";
          console.log("disable button");
        }

        if (expiryDate.substring(6, 10) === "ends") {
          document.getElementById("join-btn").disabled = false;
          document.getElementById("join-btn").innerHTML = "Join the Group";
          document.getElementById("join-btn").className = "btn btn-primary";
          document.getElementById("close-button").className = "btn btn-secondary";
          console.log("enable button");
        }
      });
    }
  });

  //
} // end of displayItem() funtion

//function to display product details on the modal
function displayProductDetails(item) {
  document.getElementById("modalName").innerText = item.itemName;
  document.getElementById("first-image").src = item.imageUrl1;
  document.getElementById("second-image").src = item.imageUrl2;
  document.getElementById("third-image").src = item.imageUrl3;
  document.getElementById("modalDelivaryMethod").innerText = item.delivery;
  document.getElementById("modalMinQty").innerText = item.minQty;
  document.getElementById("modalSellerDetails").innerText = item.sellerInfo;
}

//////calculate date validity
// const startDate = new Date('2021-08-15');
// const Period = '3';

function checkDateValidity(offerStartDate, offerPeriod) {
  let isWithInOfferPeriod = "";
  const daysPerWeek = 7;
  const msToDate = 1000 * 60 * 60 * 24;

  const todayDate = new Date();
  let offerExpiryDate = new Date(offerStartDate);

  offerExpiryDate.setDate(
    offerExpiryDate.getDate() + offerPeriod * daysPerWeek
  );

  if (todayDate >= offerStartDate && todayDate <= offerExpiryDate) {
    isWithInOfferPeriod = parseInt(
      (offerExpiryDate - todayDate) / msToDate,
      10
    );
    return `Offer ends in ${isWithInOfferPeriod} days`;
  } else if (todayDate < offerStartDate) {
    offerStartDate = offerStartDate.toString().substring(4, 15);
    return `Offer starts on ${offerStartDate}`;
  } else {
    return `expired`;
  }
}

//display items on the webpage based on the selected district code
displayItem();

//clease the session storage
productController.clearSessionStorage();
