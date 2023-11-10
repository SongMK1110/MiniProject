package com.example.demo.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
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

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Controller
@RequestMapping("/api")
@Tag(name = "Review", description = "리뷰 관련 API 입니다.")
public class ReviewController {
	@Autowired
	ReviewService reviewService;

	@GetMapping("reviewProduct")
	@ResponseBody
	@Operation(summary = "리뷰 상품 리스트 조회", description = "리뷰 상품 리스트 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "리뷰 상품 리스트 조회 성공", content = @Content(schema = @Schema(implementation = ProductVO.class))),
			@ApiResponse(responseCode = "400", description = "리뷰 상품 리스트 조회 실패", content = @Content(schema = @Schema(implementation = ProductVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<ProductVO> reviewProduct(@RequestParam int productId) {
		return ResponseEntity.ok(reviewService.getReviewProduct(productId));
	}

	@PostMapping("insertReview")
	@ResponseBody
	@Operation(summary = "리뷰 등록", description = "리뷰 등록하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "리뷰 등록 성공"),
			@ApiResponse(responseCode = "400", description = "리뷰 등록 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> insertReview(@RequestBody ReviewVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		int result = reviewService.addReview(vo);
		if (result > 0) {
			return ResponseEntity.ok("success");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}
	}

	@GetMapping("selectReview")
	@ResponseBody
	@Operation(summary = "리뷰 리스트 조회", description = "리뷰 리스트 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "리뷰 리스트 조회 성공", content = @Content(schema = @Schema(implementation = ReviewVO.class))),
			@ApiResponse(responseCode = "400", description = "리뷰 리스트 조회 실패", content = @Content(schema = @Schema(implementation = ReviewVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<ReviewVO>> selectReview(Authentication authentication) {
		ReviewVO vo = new ReviewVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return ResponseEntity.ok(reviewService.getReviewList(vo));
	}

	@GetMapping("reviewProductDetail")
	@ResponseBody
	@Operation(summary = "상품 디테일 리뷰 조회", description = "상품 디테일 페이지에서 리뷰 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "상품 디테일 리뷰 조회 성공", content = @Content(schema = @Schema(implementation = ReviewVO.class))),
			@ApiResponse(responseCode = "400", description = "상품 디테일 리뷰 조회 실패", content = @Content(schema = @Schema(implementation = ReviewVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<ReviewVO>> reviewProductDetail(@RequestParam int productId) {
		return ResponseEntity.ok(reviewService.getReviewProductDetail(productId));
	}

	@GetMapping("reviewRateAvg")
	@ResponseBody
	@Operation(summary = "리뷰 별정 평균 조회", description = "리뷰 별정 평균 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "리뷰 별정 평균 조회 성공"),
			@ApiResponse(responseCode = "400", description = "리뷰 별정 평균 조회 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<Double> reviewRateAvg(@RequestParam int productId) {
		System.out.println(productId);
		return ResponseEntity.ok(reviewService.getReviewRateAvg(productId));
	}

	@PostMapping("insertReviewComment")
	@ResponseBody
	@Operation(summary = "리뷰 댓글 등록", description = "리뷰 댓글 등록하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "리뷰 댓글 등록 성공"),
			@ApiResponse(responseCode = "400", description = "리뷰 댓글 등록 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<ReviewVO> insertReviewCommnet(@RequestBody ReviewVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		return ResponseEntity.ok(reviewService.addReviewComment(vo));

	}

	@GetMapping("selectReviewComment")
	@ResponseBody
	@Operation(summary = "리뷰 댓글 조회", description = "리뷰 댓글 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "리뷰 댓글 조회 성공", content = @Content(schema = @Schema(implementation = ReviewVO.class))),
			@ApiResponse(responseCode = "400", description = "리뷰 댓글 조회 실패", content = @Content(schema = @Schema(implementation = ReviewVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<ReviewVO>> selectReviewComment() {
		return ResponseEntity.ok(reviewService.getReviewComment());
	}

	@PostMapping("deleteComment")
	@ResponseBody
	@Operation(summary = "댓글 삭제", description = "댓글 삭제하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "댓글 삭제 성공"),
			@ApiResponse(responseCode = "400", description = "댓글 삭제 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> deleteComment(@RequestBody ReviewVO vo, Authentication authentication) {
		if (vo.getMemberId() != Integer.parseInt(authentication.getName())) {
			throw new AccessDeniedException("error");
		}
		int result = reviewService.removeReviewComment(vo);
		if (result > 0) {
			return ResponseEntity.ok("success");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}
	}

	@PostMapping("updateComment")
	@ResponseBody
	@Operation(summary = "댓글 수정", description = "댓글 수정하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "댓글 수정 성공"),
			@ApiResponse(responseCode = "400", description = "댓글 수정 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> updateComment(@RequestBody ReviewVO vo, Authentication authentication) {
		if (vo.getMemberId() != Integer.parseInt(authentication.getName())) {
			throw new AccessDeniedException("error");
		}
		int result = reviewService.modifyReviewComment(vo);
		if (result > 0) {
			return ResponseEntity.ok("success");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}
	}

}
