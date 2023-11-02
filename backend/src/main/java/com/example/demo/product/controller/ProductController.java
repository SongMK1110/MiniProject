package com.example.demo.product.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.product.service.ProductService;
import com.example.demo.product.vo.ProductVO;

@Controller
@RequestMapping("/api")
public class ProductController {
	@Autowired
	ProductService productService;

	// @GetMapping("productList")
	// @ResponseBody
	// public List<ProductVO> productList() {
	// return productService.getProductList();
	// }

	@GetMapping("productList")
	@ResponseBody
	public List<ProductVO> productList(String categoryId) {
		return productService.getProductList(categoryId);
	}

	@PostMapping("productDetail")
	@ResponseBody
	public Map<String, Object> productDetail(@RequestBody ProductVO vo, Authentication authentication) {
		if (authentication != null) {
			vo.setMemberId(Integer.parseInt(authentication.getName()));
		}
		return productService.getProductDetail(vo);
	}

	@GetMapping("searchProduct")
	@ResponseBody
	public List<ProductVO> searchProductList(ProductVO vo) {
		return productService.getSearchProduct(vo);
	}

}
