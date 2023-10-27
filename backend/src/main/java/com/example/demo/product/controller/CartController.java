package com.example.demo.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.product.service.CartService;
import com.example.demo.product.vo.CartVO;

@Controller
@RequestMapping("/api")
public class CartController {

	@Autowired
	CartService cartService;

	@GetMapping("cartList")
	@ResponseBody
	public List<CartVO> cartList(Authentication authentication) {
		CartVO vo = new CartVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return cartService.getCartList(vo);
	}

	@PostMapping("insertCart")
	@ResponseBody
	public String insertCart(@RequestBody CartVO vo, Authentication authentication) {

		vo.setMemberId(Integer.parseInt(authentication.getName()));

		int result = cartService.addCart(vo);

		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}

	@PostMapping("deleteCart")
	@ResponseBody
	public String deleteCart(@RequestBody CartVO vo, Authentication authentication) {
		
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		int result = cartService.removeCart(vo);

		if (result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	@PostMapping("cartCheck")
	@ResponseBody
	public String cartCheck(@RequestBody CartVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		int result = cartService.cartCheck(vo);
		
		if(result > 0) {
			return "duplication";
		} else {
			return "success";
		}
	}
}
