package com.bevybuy.webproject.controller;


import com.bevybuy.webproject.controller.dto.ProductDTO;
import com.bevybuy.webproject.controller.dto.SellerDTO;
import com.bevybuy.webproject.repository.entity.Product;
import com.bevybuy.webproject.repository.entity.Seller;
import com.bevybuy.webproject.service.ProductService;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/item")
public class ProductController {


    final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }


    @CrossOrigin
    @GetMapping("/all")
    public Iterable<Product> getProducts(){
        return productService.all();
    }

    @CrossOrigin
    @PostMapping("/add")
    public /*Product*/ List<Object> save(
            // PRODUCT INFO
            @RequestParam(name="itemName") String itemName,
            @RequestParam(name="description") String description,
            @RequestParam(name="price") Double price,
            @RequestParam(name="discount") Double discount,
            @RequestParam(name="imageUrl1") String imageUrl1,
            @RequestParam(name="imageUrl2") String imageUrl2,
            @RequestParam(name="imageUrl3") String imageUrl3,
            @RequestParam(name="minQty") Integer minQty,
            @RequestParam(name="offerPeriod") Integer offerPeriod,
            @RequestParam(name="effectiveDate") String effectiveDate,
            @RequestParam(name="organizer") String organizer,
            @RequestParam(name="areaCode") String areaCode,
            @RequestParam(name="delivery") String delivery,

            //SELLER INFO
            @RequestParam(name="fullName") String fullName,
            @RequestParam(name="sellerInfo") String sellerInfo,
            @RequestParam(name="address1") String address1,
            @RequestParam(name="address2") String address2,
            @RequestParam(name="postalCode") String postalCode,
            @RequestParam(name="email") String email,
            @RequestParam(name="comDescription") String comDescription,
            @RequestParam(name="referralCode") String referralCode

    ) throws IOException {
        //
        //todo handle image files
        //

        ProductDTO productDTO = new ProductDTO(itemName, description, price, discount, imageUrl1, imageUrl2,
                                    imageUrl3, minQty, offerPeriod, effectiveDate, organizer, areaCode, delivery);
        Product productResponse = productService.save(new Product(productDTO));


        SellerDTO sellerDTO = new SellerDTO(fullName, sellerInfo, address1, address2, postalCode, email, comDescription, referralCode);
        Seller sellerResponse = productService.save(new Seller(sellerDTO));
        //Seller sellerResponse = sellerService.save(new Seller(sellerDTO));

        List<Object> arrList = new ArrayList<>();
        arrList.add(productResponse);
        //arrList.add(sellerResponse);
        return arrList;


    }


}
