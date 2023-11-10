package com.example.demo.member.vo;

import java.util.Date;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;

@Data
public class MemberVO {
	@Schema(description = "회원고유번호")
	private int memberId;
	@Schema(description = "아이디")
	private String id;
	@Schema(description = "이메일")
	private String email;
	@Schema(description = "이름")
	private String name;
	@Schema(description = "비밀번호")
	private String pw;
	@Schema(description = "성별")
	private int gender;
	@Schema(description = "전화번호")
	private String phone;
	@Schema(description = "권한", allowableValues = { "user", "admin" })
	private String role;
	@Schema(description = "가입일자")
	private Date sign_dt;
	@Schema(description = "회원탈퇴", allowableValues = { "Y", "N" }, defaultValue = "N")
	private String sign_out;
	@Schema(description = "적립금")
	private String reserves;
	@Schema(description = "닉네임")
	private String nickname;
	@Schema(description = "이미지")
	private String img;
	@Schema(description = "중복 체크")
	private int chk;

}
