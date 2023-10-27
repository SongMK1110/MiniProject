package com.example.demo.product.mapper;

import java.util.List;

import com.example.demo.product.vo.ProductVO;

public interface ProductMapper {
	// 상품 조회(카테고리별 or 전체)
	public List<ProductVO> selectProductList(String categoryId);

	// 상품 디테일
	public ProductVO selectProductDetail(ProductVO vo);

	// 상품 이미지
	public List<ProductVO> selectProductDetailImg(ProductVO vo);
	
	// 좋아요 체크
	public int likeCheck(ProductVO vo);

}
