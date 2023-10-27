package com.example.demo.product.mapper;

import java.util.List;

import com.example.demo.product.vo.ProductVO;
import com.example.demo.product.vo.ReviewVO;

public interface ReviewMapper {
	// 리뷰 상품 조회
	public ProductVO selectReviewProduct(int productId);
	
	// 리뷰 등록
	public int insertReview(ReviewVO vo);
	
	// 리뷰 조회
	public List<ReviewVO> selectReviewList(ReviewVO vo);
	
	// 리뷰 상품 디테일 조회
	public List<ReviewVO> selectReviewProductDetail(int productId);
	
	// 리뷰 전체 평균 별점
	public double selectReviewRateAvg(int productId);
	
}
