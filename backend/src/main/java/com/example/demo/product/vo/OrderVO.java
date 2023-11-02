package com.example.demo.product.vo;

import lombok.Data;

@Data
public class OrderVO {
	private int orderId;
	private int memberId;
	private String rdate;
	private String name;
	private String addr;
	private String addrDetail;
	private String phone;
	private String zipcode;
	private String req;
	private int price;
	private String paymentMethod;
	private int reserves;

	private int productId;
	private int cnt;
	private String img;
	private int reservesPlus;
	private int reservesMinus;
	private int totalPrice;
	private String productName;

}
