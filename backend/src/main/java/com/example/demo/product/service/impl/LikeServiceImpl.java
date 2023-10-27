package com.example.demo.product.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.product.mapper.LikeMapper;
import com.example.demo.product.service.LikeService;
import com.example.demo.product.vo.LikeVO;

@Service
public class LikeServiceImpl implements LikeService {

	@Autowired
	LikeMapper likeMapper;
	
	@Override
	public int addLike(LikeVO vo) {
		return likeMapper.insertLike(vo);
	}

	@Override
	public List<LikeVO> getLikeList(LikeVO vo) {
		return likeMapper.selectLike(vo);
	}

	@Override
	public int removeLike(LikeVO vo) {
		System.out.println(vo);
		return likeMapper.deleteLike(vo);
	}

}
