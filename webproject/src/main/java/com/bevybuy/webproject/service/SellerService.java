package com.bevybuy.webproject.service;

import com.bevybuy.webproject.repository.entity.Product;
import com.bevybuy.webproject.repository.entity.Seller;

import java.util.List;

public interface SellerService {

    Seller save(Seller seller);

    void delete(Integer sellerId);

    List<Product> all();

    Product findById(Integer sellerId);
}
