package com.example.demo.product.service;

import java.util.List;

import com.example.demo.product.vo.CartVO;

public interface CartService {
	// 카트조회
	public List<CartVO> getCartList(CartVO vo);

	// 카트등록
	public int addCart(CartVO vo);

	// 카트 삭제
	public int removeCart(CartVO vo);

	// 카트 체크
	public int cartCheck(CartVO vo);

	// 카트 수정
	public int modifyCart(CartVO vo);
}
