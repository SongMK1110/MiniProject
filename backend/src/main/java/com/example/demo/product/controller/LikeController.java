package com.example.demo.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.product.service.LikeService;
import com.example.demo.product.vo.LikeVO;

@Controller
@RequestMapping("/api")
public class LikeController {

	
	@Autowired
	LikeService likeService;
	
	@PostMapping("insertLike")
	@ResponseBody
	public String insertLike(@RequestBody LikeVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		
		int result = likeService.addLike(vo);
		
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
		
	}
	
	@GetMapping("likeList")
	@ResponseBody
	public List<LikeVO> likeList(Authentication authentication) {
		LikeVO vo = new LikeVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return likeService.getLikeList(vo);
		
	}
	
	@PostMapping("deleteLike")
	@ResponseBody
	public String deleteLike(@RequestBody LikeVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		
		System.out.println(vo);
		int result = likeService.removeLike(vo);
		System.out.println(result);
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
		
	}
}
