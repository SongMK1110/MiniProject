package com.example.demo.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.product.service.ReviewService;
import com.example.demo.product.vo.ProductVO;
import com.example.demo.product.vo.ReviewVO;

@Controller
@RequestMapping("/api")
public class ReviewController {
	@Autowired
	ReviewService reviewService;
	
	@GetMapping("reviewProduct")
	@ResponseBody
	public ProductVO reviewProduct(@RequestParam int productId) {
		return reviewService.getReviewProduct(productId);
	}
	
	@PostMapping("insertReview")
	@ResponseBody
	public String insertReview(@RequestBody ReviewVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		
		
		int result = reviewService.addReview(vo);
		if(result > 0) {
			return "success";
		} else {
			return "fail";
		}
	}
	
	@GetMapping("selectReview")
	@ResponseBody
	public List<ReviewVO> selectReview(Authentication authentication) {
		ReviewVO vo = new ReviewVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return reviewService.getReviewList(vo);
	}
	
	@GetMapping("reviewProductDetail")
	@ResponseBody
	public List<ReviewVO> reviewProductDetail(@RequestParam int productId){
		return reviewService.getReviewProductDetail(productId);
	}
	
	@GetMapping("reviewRateAvg")
	@ResponseBody
	public double reviewRateAvg(@RequestParam int productId) {
		return reviewService.getReviewRateAvg(productId);
	}
	
	
}
