package com.example.demo.product.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.member.vo.MemberVO;
import com.example.demo.product.service.OrderService;
import com.example.demo.product.vo.AddressVO;
import com.example.demo.product.vo.CartVO;
import com.example.demo.product.vo.OrderVO;

@Controller
@RequestMapping("/api")
public class OrderController {
	@Autowired
	OrderService orderService;

	@GetMapping("selectAddrList")
	@ResponseBody
	public List<AddressVO> selectAddrList(Authentication authentication) {
		AddressVO vo = new AddressVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return orderService.getAddr(vo);
	}

	@PostMapping("selectAddrInfo")
	@ResponseBody
	public AddressVO selectAddrInfo(@RequestBody AddressVO vo) {
		return orderService.getAddrInfo(vo);
	}

	@GetMapping("selectCartProduct")
	@ResponseBody
	public List<CartVO> selectCartProduct(@RequestParam String ids, Authentication authentication) {
		String[] arr = ids.split(",");
		List<CartVO> cartList = new ArrayList<>();
		for (String str : arr) {
			CartVO vo = new CartVO();
			vo.setProductId(Integer.parseInt(str));
			vo.setMemberId(Integer.parseInt(authentication.getName()));
			CartVO cart = orderService.getCartProduct(vo);
			if (cart != null) {
				cartList.add(cart);
			}
		}
		return cartList;
	}

	@PostMapping("order")
	@ResponseBody
	public int order(@RequestBody OrderVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		int result = orderService.addOrder(vo);

		int orderId = vo.getOrderId();

		System.out.println(orderId);

		if (result > 0) {
			return orderId;
		} else {
			return -1;
		}
	}

	@PostMapping("orderDetail")
	@ResponseBody
	public String orderDetail(@RequestBody OrderVO[] vo, Authentication authentication) {

		int result = 0;
		for (int i = 0; i < vo.length; i++) {
			System.out.println(vo[i]);
			vo[i].setMemberId(Integer.parseInt(authentication.getName()));
			result = orderService.addOrderDetail(vo[i]);
		}

		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}

	@GetMapping("selectOrderList")
	@ResponseBody
	public List<OrderVO> selectOrderList(Authentication authentication) {
		OrderVO vo = new OrderVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return orderService.getOrderList(vo);
	}

	@PostMapping("insertAddr")
	@ResponseBody
	public String insertAddr(@RequestBody AddressVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		int result = orderService.addAddr(vo);

		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}

	@GetMapping("selectReserves")
	@ResponseBody
	public MemberVO selectReserves(Authentication authentication) {
		MemberVO vo = new MemberVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return orderService.getReserves(vo);
	}
}
