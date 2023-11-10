package com.example.demo.product.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.product.service.LikeService;
import com.example.demo.product.vo.LikeVO;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Controller
@RequestMapping("/api")
@Tag(name = "Like", description = "좋아요 관련 API 입니다.")
public class LikeController {

	@Autowired
	LikeService likeService;

	@PostMapping("insertLike")
	@ResponseBody
	@Operation(summary = "좋아요 등록", description = "좋아요 등록하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "좋아요 등록 성공"),
			@ApiResponse(responseCode = "400", description = "좋아요 등록 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> insertLike(@RequestBody LikeVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		int result = likeService.addLike(vo);

		if (result > 0) {
			return ResponseEntity.ok("success");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}

	}

	@GetMapping("likeList")
	@ResponseBody
	@Operation(summary = "좋아요 리스트 조회", description = "좋아요 리스트 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "좋아요 리스트 조회 성공", content = @Content(schema = @Schema(implementation = LikeVO.class))),
			@ApiResponse(responseCode = "400", description = "좋아요 리스트 조회 실패", content = @Content(schema = @Schema(implementation = LikeVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<LikeVO>> likeList(Authentication authentication) {
		LikeVO vo = new LikeVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return ResponseEntity.ok(likeService.getLikeList(vo));

	}

	@PostMapping("deleteLike")
	@ResponseBody
	@Operation(summary = "좋아요 삭제", description = "좋아요 삭제하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "좋아요 삭제 성공"),
			@ApiResponse(responseCode = "400", description = "좋아요 삭제 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> deleteLike(@RequestBody LikeVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		int result = likeService.removeLike(vo);
		if (result > 0) {
			return ResponseEntity.ok("success");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}

	}
}
