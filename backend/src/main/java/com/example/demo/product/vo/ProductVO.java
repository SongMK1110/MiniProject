package com.example.demo.product.vo;

import java.util.Date;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class ProductVO {
	@Schema(description = "상품 고유번호")
	private int productId;
	@Schema(description = "카테고리 고유번호")
	private int categoryId;
	@Schema(description = "이름")
	private String name;
	@Schema(description = "가격")
	private int price;
	@Schema(description = "내용")
	private String content;
	@Schema(description = "생성일")
	private Date rdate;
	@Schema(description = "이미지")
	private String img;
	@Schema(description = "회원 고유번호")
	private int memberId;
	@Schema(description = "상품 수량 체크")
	private int count;
}
