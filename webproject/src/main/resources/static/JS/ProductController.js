console.log("controller page");

// Get saved data from sessionStorage
let districtCode = sessionStorage.getItem('areaCode');
console.log('district code...  ', districtCode);

//create product controller class
class ProductController {

  constructor() {
    this._items = [];
  }

  //create addItem method to add product details to the _items object
  addItem(itemName, description, imageURL, price, offerPeriod, delivery, minQty, sellerInfo, areaCode, effectiveDate) {

    const item = {
      itemName,
      description,
      imageURL,
      price,
      offerPeriod,
      delivery,
      minQty,
      sellerInfo,
      areaCode,
      effectiveDate
    };

    //push each item to _items array of objects
    this._items.push(item);
    console.log(this._items);
  }

  getItems() {
    return this._items.filter(item => item.areaCode === districtCode);
  }

  clearSessionStorage() {
    // Remove saved data from sessionStorage
    sessionStorage.removeItem('areaCode');
  }

}   // class ProductController class ends

