package com.example.demo.product.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.product.mapper.CartMapper;
import com.example.demo.product.mapper.OrderMapper;
import com.example.demo.product.service.OrderService;
import com.example.demo.product.vo.AddressVO;
import com.example.demo.product.vo.CartVO;
import com.example.demo.product.vo.OrderVO;

@Service
public class OrderServiceImpl implements OrderService{
	@Autowired
	OrderMapper orderMapper;
	
	@Autowired
	CartMapper cartMapper;

	@Override
	public List<AddressVO> getAddr(AddressVO vo) {
		return orderMapper.selectAddr(vo);
	}

	@Override
	public AddressVO getAddrInfo(AddressVO vo) {
		return orderMapper.selectAddrInfo(vo);
	}

	@Override
	public CartVO getCartProduct(CartVO vo) {
		return orderMapper.selectCartProduct(vo);
	}

	@Override
	public int addOrder(OrderVO vo) {
		return orderMapper.insertOrder(vo);
	}

	@Override
	public int addOrderDetail(OrderVO vo) {
		return orderMapper.insertOrderDetail(vo);
	}

	@Override
	public List<OrderVO> getOrderList(OrderVO vo) {
		return orderMapper.selectOrderList(vo);
	}

	@Override
	public int addAddr(AddressVO vo) {
		return orderMapper.insertAddr(vo);
	}
}
