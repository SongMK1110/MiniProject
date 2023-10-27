package com.example.demo.product.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.product.mapper.CartMapper;
import com.example.demo.product.service.CartService;
import com.example.demo.product.vo.CartVO;

@Service
public class CartServiceImpl implements CartService {
	@Autowired
	CartMapper cartMapper;

	@Override
	public List<CartVO> getCartList(CartVO vo) {
		return cartMapper.selectCartList(vo);
	}

	@Override
	public int addCart(CartVO vo) {
		return cartMapper.insertCart(vo);
	}

	@Override
	public int removeCart(CartVO vo) {
		return cartMapper.deleteCart(vo);
	}

	@Override
	public int cartCheck(CartVO vo) {
		return cartMapper.cartCheck(vo);
	}
}
