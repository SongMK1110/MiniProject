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

	// 리뷰 댓글 등록
	public int insertReviewComment(ReviewVO vo);

	// 리뷰 댓글 리스트 조회
	public List<ReviewVO> selectReviewComment();

	// 리뷰 댓글 단건 조회
	public ReviewVO selectOneReviewComment(ReviewVO vo);

	// 리뷰 댓글 삭제
	public int deleteReviewComment(ReviewVO vo);

	// 리뷰 댓글 수정
	public int updateReviewComment(ReviewVO vo);
}
