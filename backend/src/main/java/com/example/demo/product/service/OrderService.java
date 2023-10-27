package com.example.demo.product.service;

import java.util.List;

import com.example.demo.product.vo.AddressVO;
import com.example.demo.product.vo.CartVO;
import com.example.demo.product.vo.OrderVO;

public interface OrderService {
	// 배송지 조회
	public List<AddressVO> getAddr(AddressVO vo);

	// 배송 정보
	public AddressVO getAddrInfo(AddressVO vo);

	// 주문 상품 정보
	public CartVO getCartProduct(CartVO vo);

	// 주문 등록
	public int addOrder(OrderVO vo);

	// 주문 등록
	public int addOrderDetail(OrderVO vo);

	// 주문 내역 조회
	public List<OrderVO> getOrderList(OrderVO vo);

	// 주소 등록
	public int addAddr(AddressVO vo);
}