package com.example.demo.product.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class OrderVO {
	@Schema(description = "주문 고유번호")
	private int orderId;
	@Schema(description = "회원 고유번호")
	private int memberId;
	@Schema(description = "생성일")
	private String rdate;
	@Schema(description = "수령자")
	private String name;
	@Schema(description = "주소")
	private String addr;
	@Schema(description = "상세 주소")
	private String addrDetail;
	@Schema(description = "전화번호")
	private String phone;
	@Schema(description = "우편번호")
	private String zipcode;
	@Schema(description = "요청사항")
	private String req;
	@Schema(description = "상품 가격")
	private int price;
	@Schema(description = "결제수단")
	private String paymentMethod;
	@Schema(description = "적립금")
	private int reserves;
	@Schema(description = "상품 고유번호")
	private int productId;
	@Schema(description = "상품 수량")
	private int cnt;
	@Schema(description = "상품 이미지")
	private String img;
	@Schema(description = "적립금 적립")
	private int reservesPlus;
	@Schema(description = "적립금 차감")
	private int reservesMinus;
	@Schema(description = "총 가격")
	private int totalPrice;
	@Schema(description = "상품 이름")
	private String productName;
	@Schema(description = "시작 날짜")
	private String startDate;
	@Schema(description = "끝 날짜")
	private String endDate;

}
