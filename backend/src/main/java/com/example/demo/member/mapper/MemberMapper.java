package com.example.demo.member.mapper;

import com.example.demo.member.vo.MemberVO;

public interface MemberMapper {
	
//	public TokenInfo login(String string, String string2);
	
	public MemberVO login(MemberVO vo);
	
	public int insertSignUp(MemberVO vo);
	
	public int selectLoginChk(MemberVO vo);


}
