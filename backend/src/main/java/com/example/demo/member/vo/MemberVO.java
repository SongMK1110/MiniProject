package com.example.demo.member.vo;

import java.util.Date;

import lombok.Data;

@Data
public class MemberVO {
	private int memberId;
	private String id;
	private String email;
	private String name;
	private String pw;
	private int gender;
	private String phone;
	private String role;
	private Date sign_dt;
	private String sign_out;
	private String reserves;
	
	private int chk;
	
}
