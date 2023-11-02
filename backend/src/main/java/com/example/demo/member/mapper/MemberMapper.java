package com.example.demo.member.mapper;

import com.example.demo.member.vo.MemberVO;
import com.example.demo.product.vo.OrderVO;

public interface MemberMapper {

	// public TokenInfo login(String string, String string2);

	public MemberVO login(MemberVO vo);

	public int insertSignUp(MemberVO vo);

	public int selectLoginChk(MemberVO vo);

	public MemberVO selectMember(MemberVO vo);

	public int nicknameCheck(MemberVO vo);

	public int updateMypage(MemberVO vo);

	public int reservesPlus(OrderVO vo);

	public int reservesMinus(OrderVO vo);

}
