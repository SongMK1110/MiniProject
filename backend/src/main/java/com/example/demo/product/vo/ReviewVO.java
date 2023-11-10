package com.example.demo.product.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class ReviewVO {
	@Schema(description = "리뷰 고유번호")
	private int reviewId;
	@Schema(description = "상품 고유번호")
	private int productId;
	@Schema(description = "회원 고유번호")
	private int memberId;
	@Schema(description = "내용")
	private String content;
	@Schema(description = "별점")
	private double rate;
	@Schema(description = "생성일")
	private String rdate;
	@Schema(description = "사이즈", allowableValues = { "1", "2", "3" })
	private int size;
	@Schema(description = "밝기", allowableValues = { "1", "2", "3" })
	private int brightness;
	@Schema(description = "색감", allowableValues = { "1", "2", "3" })
	private int color;
	@Schema(description = "두께", allowableValues = { "1", "2", "3" })
	private int thickness;
	@Schema(description = "배송", allowableValues = { "1", "2" })
	private int delivery;
	@Schema(description = "포장", allowableValues = { "1", "2" })
	private int packaging;
	@Schema(description = "상품 이름")
	private String name;
	@Schema(description = "평균")
	private double avg;
	@Schema(description = "댓글 고유번호")
	private int commentId;
	@Schema(description = "댓글 내용")
	private String reviewComment;
	@Schema(description = "수량 체크")
	private int count;

}
