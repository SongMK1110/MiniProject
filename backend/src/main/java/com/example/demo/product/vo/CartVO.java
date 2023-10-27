package com.example.demo.product.vo;

import lombok.Data;

@Data
public class CartVO {
	private int cartId;
	private int productId;
	private int memberId;
	private int cnt;
	
	private String name;
	private int price;
	private String img;
		
}
