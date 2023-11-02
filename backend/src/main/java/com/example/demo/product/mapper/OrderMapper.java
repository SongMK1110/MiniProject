package com.example.demo.product.mapper;

import java.util.List;

import com.example.demo.member.vo.MemberVO;
import com.example.demo.product.vo.AddressVO;
import com.example.demo.product.vo.CartVO;
import com.example.demo.product.vo.OrderVO;

public interface OrderMapper {
	// 배송지 조회
	public List<AddressVO> selectAddr(AddressVO vo);

	// 배송지 정보
	public AddressVO selectAddrInfo(AddressVO vo);

	// 주문 상품 정보
	public CartVO selectCartProduct(CartVO vo);

	// 주문서 등록
	public int insertOrder(OrderVO vo);

	// 주문서 디테일 등록
	public int insertOrderDetail(OrderVO vo);

	// 주문 내역 조회
	public List<OrderVO> selectOrderList(OrderVO vo);

	// 주소 등록
	public int insertAddr(AddressVO vo);

	// 적립금 조회
	public MemberVO selectReserves(MemberVO vo);

	// 주문서 디테일 페이지 조회
	public List<OrderVO> selectOrderDetailList(OrderVO vo);
}
