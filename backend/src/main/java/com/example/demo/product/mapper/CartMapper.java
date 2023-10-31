package com.example.demo.product.mapper;

import java.util.List;

import com.example.demo.product.vo.CartVO;

public interface CartMapper {

	// 카트조회
	public List<CartVO> selectCartList(CartVO vo);

	// 카트 등록
	public int insertCart(CartVO vo);

	// 카트 삭제
	public int deleteCart(CartVO vo);

	// 카트 체크
	public int cartCheck(CartVO vo);

	// 카트 수정
	public int updateCart(CartVO vo);
}
