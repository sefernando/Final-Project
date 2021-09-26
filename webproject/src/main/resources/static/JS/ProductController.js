console.log("controller page");

//Get saved data from sessionStorage
let districtCode = sessionStorage.getItem('areaCode');
console.log('district code...  ', districtCode);

//################### create product controller class #####################
class ProductController {

  constructor() {
    this._items = [];
  }

  //todo remove this add item and use the below add item method instead
  //create addItem method to add product details to the _items object
  addItem(itemName, description, imageUrl1, imageUrl2, imageUrl3, price, discount, offerPeriod, delivery, minQty, sellerInfo, areaCode, effectiveDate) {

    const item = {
      itemName,
      description,
      imageUrl1,
      imageUrl2,
      imageUrl3,
      price,
      discount,
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

  //todo use this addItem method to POST data. delete the above one
  // addItem(itemName, description, price, discount, imageUrl1, imageUrl2, imageUrl3,
  //   minQty, offerPeriod, effectiveDate, organizer, areaCode, delivery, fullName,
  //   sellerInfo, address1, address2, postalCode, email, comDescription, referralCode,
  //   imageObj1, imageObj2, imageObj3
  // ) {
  //   var productController = this;
  //   const formData = new FormData();

  //   formData.append('itemName', itemName);
  //   formData.append('description', description);
  //   formData.append('price', price);
  //   formData.append('discount', discount);
  //   formData.append('imageUrl1', imageUrl1);
  //   formData.append('imageUrl2', imageUrl2);
  //   formData.append('imageUrl2', imageUrl3);
  //   formData.append('minQty', minQty);
  //   formData.append('offerPeriod', offerPeriod);
  //   formData.append('effectiveDate', effectiveDate);
  //   formData.append('organizer', organizer);
  //   formData.append('areaCode', areaCode);
  //   formData.append('delivery', delivery);
  //   formData.append('fullName', fullName);
  //   formData.append('sellerInfo', sellerInfo);
  //   formData.append('address1', address1);
  //   formData.append('address2', address2);
  //   formData.append('postalCode', postalCode);
  //   formData.append('email', email);
  //   formData.append('comDescription', comDescription);
  //   formData.append('referralCode', referralCode);
  //   //3 image files
  //   formData.append('imageObj1', imageObj1);
  //   formData.append('imageObj2', imageObj2);
  //   formData.append('imageObj3', imageObj3);


  //   fetch('http://localhost:8080/item/add', {
  //     method: 'POST',
  //     body: formData
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log('sucess post', data)
  //       alert("Item successfully added to the list")
  //     })
  //     .catch(alert("Failed to add the item to the list"))
  // }




  // todo method to fetch items from the back end
  getItems() {

    //return statement instead on this._items

    // let itemController = this;
    // itemController._items = [];

    // fetch('http://localhost:8080/item/all')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('items', data);
    //     //todo check if data is in two array of objects. handle accordingly
    //     itemController._items.push(...data);

    //   })
    //   .catch(e => console.log(e));
    //*********** added new part *******************/

    return this._items.filter(item => item.areaCode === districtCode);
  }


  clearSessionStorage() {
    // Remove saved data from sessionStorage
    sessionStorage.removeItem('areaCode');
  }

}

//################### end product controller class #####################

