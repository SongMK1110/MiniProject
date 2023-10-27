package com.example.demo.product.service;

import java.util.List;

import com.example.demo.product.vo.ProductVO;
import com.example.demo.product.vo.ReviewVO;

public interface ReviewService {

	// 리뷰 상품 조회
	public ProductVO getReviewProduct(int productId);

	// 리뷰 등록
	public int addReview(ReviewVO vo);

	// 리뷰 조회
	public List<ReviewVO> getReviewList(ReviewVO vo);

	// 리뷰 상품 디테일 조회
	public List<ReviewVO> getReviewProductDetail(int productId);

	// 리뷰 전체 평균 별점
	public double getReviewRateAvg(int productId);

}
