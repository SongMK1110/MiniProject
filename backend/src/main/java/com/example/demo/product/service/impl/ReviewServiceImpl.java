package com.example.demo.product.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.product.mapper.ReviewMapper;
import com.example.demo.product.service.ReviewService;
import com.example.demo.product.vo.ProductVO;
import com.example.demo.product.vo.ReviewVO;

@Service
public class ReviewServiceImpl implements ReviewService {
	@Autowired
	ReviewMapper reviewMapper;

	@Override
	public ProductVO getReviewProduct(int productId) {
		return reviewMapper.selectReviewProduct(productId);
	}

	@Override
	public int addReview(ReviewVO vo) {
		return reviewMapper.insertReview(vo);
	}

	@Override
	public List<ReviewVO> getReviewList(ReviewVO vo) {
		return reviewMapper.selectReviewList(vo);
	}

	@Override
	public List<ReviewVO> getReviewProductDetail(int productId) {
		return reviewMapper.selectReviewProductDetail(productId);
	}

	@Override
	public double getReviewRateAvg(int productId) {
		return reviewMapper.selectReviewRateAvg(productId);
	}

	@Override
	public ReviewVO addReviewComment(ReviewVO vo) {
		int result = reviewMapper.insertReviewComment(vo);
		if (result > 0) {
			return reviewMapper.selectOneReviewComment(vo);
		} else {
			return null;
		}

	}

	@Override
	public List<ReviewVO> getReviewComment() {
		return reviewMapper.selectReviewComment();
	}

	@Override
	public int removeReviewComment(ReviewVO vo) {
		return reviewMapper.deleteReviewComment(vo);
	}

	@Override
	public int modifyReviewComment(ReviewVO vo) {
		return reviewMapper.updateReviewComment(vo);
	}

}
