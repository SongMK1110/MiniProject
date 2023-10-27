package com.example.demo.product.vo;

import java.util.Date;

import lombok.Data;

@Data
public class ReviewVO {
	private int reviewId;
	private int productId;
	private int memberId;
	private String content;
	private double rate;
	private Date rdate;
	private int size;
	private int brightness;
	private int color;
	private int thickness;
	private int delivery;
	private int packaging;
	
	private String name;
	private double avg;
	
}
