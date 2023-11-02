package com.example.demo.product.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ProductVO {
	private int productId;
	private int categoryId;
	private String name;
	private int price;
	private String content;
	private Date rdate;

	private String img;
	private int memberId;
	private int count;
}
