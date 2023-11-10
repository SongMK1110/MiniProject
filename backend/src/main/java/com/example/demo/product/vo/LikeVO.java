package com.example.demo.product.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class LikeVO {
	@Schema(description = "좋아요 고유번호")
	private int likeId;
	@Schema(description = "회원 고유번호")
	private int memberId;
	@Schema(description = "상품 고유번호")
	private int productId;
	@Schema(description = "상품 이름")
	private String name;
	@Schema(description = "상품 가격")
	private int price;
	@Schema(description = "상품 이미지")
	private String img;
}
