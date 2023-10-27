package com.example.demo.product.service;

import java.util.List;

import com.example.demo.product.vo.LikeVO;

public interface LikeService {

	// 좋아요 등록
	public int addLike(LikeVO vo);
	
	// 좋아요 리스트
	public List<LikeVO> getLikeList(LikeVO vo);
	
	// 좋아요 삭제
	public int removeLike(LikeVO vo);
}
