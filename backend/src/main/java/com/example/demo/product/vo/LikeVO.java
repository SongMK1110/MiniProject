package com.example.demo.product.vo;

import lombok.Data;

@Data
public class LikeVO {
	
	private int likeId;
	private int memberId;
	private int productId;
	
	private String name;
	private int price;
	private String img;
}
