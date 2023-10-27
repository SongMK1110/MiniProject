package com.example.demo.member.service;

import com.example.demo.member.vo.MemberVO;

public interface MemberService {
//	public TokenInfo login(String string, String string2);
	
	public String loginToken(String userName, String password);
	
	public MemberVO login(MemberVO vo);
	
	public int addSignUp(MemberVO vo);
	
	public int selectLoginChk(MemberVO vo);
}
