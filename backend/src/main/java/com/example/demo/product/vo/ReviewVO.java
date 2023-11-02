package com.example.demo.product.vo;

import lombok.Data;

@Data
public class ReviewVO {
	private int reviewId;
	private int productId;
	private int memberId;
	private String content;
	private double rate;
	private String rdate;
	private int size;
	private int brightness;
	private int color;
	private int thickness;
	private int delivery;
	private int packaging;

	private String name;
	private double avg;

	private int commentId;
	private String reviewComment;

	private int count;

}
