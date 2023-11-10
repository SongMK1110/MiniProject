package com.example.demo.product.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.product.service.ProductService;
import com.example.demo.product.vo.ProductVO;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Controller
@RequestMapping("/api")
@Tag(name = "Product", description = "상품 관련 API 입니다.")
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
	@Operation(summary = "상품 리스트 조회", description = "상품 리스트 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "상품 리스트 조회 성공", content = @Content(schema = @Schema(implementation = ProductVO.class))),
			@ApiResponse(responseCode = "400", description = "상품 리스트 조회 실패", content = @Content(schema = @Schema(implementation = ProductVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<ProductVO>> productList(String categoryId) {
		return ResponseEntity.ok(productService.getProductList(categoryId));
	}

	@GetMapping("productDetail")
	@ResponseBody
	@Operation(summary = "상품 디테일 조회", description = "상품 디테일 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "상품 디테일 조회 성공", content = @Content(schema = @Schema(implementation = ProductVO.class))),
			@ApiResponse(responseCode = "400", description = "상품 디테일 조회 실패", content = @Content(schema = @Schema(implementation = ProductVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<Map<String, Object>> productDetail(int productId, Authentication authentication) {
		ProductVO vo = new ProductVO();
		vo.setProductId(productId);
		if (authentication != null) {
			vo.setMemberId(Integer.parseInt(authentication.getName()));
		}
		return ResponseEntity.ok(productService.getProductDetail(vo));
	}

	@GetMapping("searchProduct")
	@ResponseBody
	@Operation(summary = "상품 검색 조회", description = "상품 검색 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "상품 검색 조회 성공", content = @Content(schema = @Schema(implementation = ProductVO.class))),
			@ApiResponse(responseCode = "400", description = "상품 검색 조회 실패", content = @Content(schema = @Schema(implementation = ProductVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<ProductVO>> searchProductList(ProductVO vo) {
		return ResponseEntity.ok(productService.getSearchProduct(vo));
	}

}
