package com.example.demo.product.service;

import java.util.List;
import java.util.Map;

import com.example.demo.product.vo.ProductVO;

public interface ProductService {
	// 상품 조회(카테고리별 or 전체)
	public List<ProductVO> getProductList(String categoryId);

	// 상품 디테일
	public Map<String, Object> getProductDetail(ProductVO vo);

	// 상품 검색 리스트
	public List<ProductVO> getSearchProduct(ProductVO vo);
}
