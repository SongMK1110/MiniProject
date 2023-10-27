package com.example.demo.product.mapper;

import java.util.List;

import com.example.demo.product.vo.LikeVO;

public interface LikeMapper {
	
	// 좋아요 등록
	public int insertLike(LikeVO vo);
	
	// 좋아요 조회
	public List<LikeVO> selectLike(LikeVO vo);
	
	// 좋아요 삭제
	public int deleteLike(LikeVO vo);
}
