package com.example.demo.product.vo;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class AddressVO {
	@Schema(description = "배송지 고유번호")
	private int addrId;
	@Schema(description = "회원 유번호")
	private int memberId;
	@Schema(description = "받는 사람")
	private String name;
	@Schema(description = "우편번호")
	private String zipcode;
	@Schema(description = "주소")
	private String addr;
	@Schema(description = "상세주소")
	private String addrDetail;
	@Schema(description = "요청사항")
	private String req;
	@Schema(description = "전화번호")
	private String phone;
	@Schema(description = "회원탈퇴", allowableValues = { "Y", "N" }, defaultValue = "N")
	private String def;
	@Schema(description = "배송지명")
	private String addrName;
}
