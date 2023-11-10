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

import com.example.demo.product.service.CartService;
import com.example.demo.product.vo.CartVO;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Controller
@RequestMapping("/api")
@Tag(name = "Cart", description = "장바구니 관련 API 입니다.")
public class CartController {

	@Autowired
	CartService cartService;

	@GetMapping("cartList")
	@ResponseBody
	@Operation(summary = "장바구니 리스트 조회", description = "장바구니 리스트 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "장바구니 리스트 조회 성공", content = @Content(schema = @Schema(implementation = CartVO.class))),
			@ApiResponse(responseCode = "400", description = "장바구니 리스트 조회 실패", content = @Content(schema = @Schema(implementation = CartVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<CartVO>> cartList(Authentication authentication) {
		CartVO vo = new CartVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return ResponseEntity.ok(cartService.getCartList(vo));
	}

	@PostMapping("insertCart")
	@ResponseBody
	@Operation(summary = "장바구니 등록", description = "장바구니 등록하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "장바구니 등록 성공"),
			@ApiResponse(responseCode = "400", description = "장바구니 등록 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> insertCart(@RequestBody CartVO vo, Authentication authentication) {

		vo.setMemberId(Integer.parseInt(authentication.getName()));

		if (vo.getCnt() > 1000) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Exceeded cnt");
		}

		int result = cartService.addCart(vo);

		if (result == 1) {
			return ResponseEntity.ok("success");
		} else if (result == -1) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("duplication");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}
	}

	@PostMapping("deleteCart")
	@ResponseBody
	@Operation(summary = "장바구니 삭제", description = "장바구니 삭제하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "장바구니 삭제 성공", content = @Content(schema = @Schema(implementation = CartVO.class))),
			@ApiResponse(responseCode = "400", description = "장바구니 삭제 실패", content = @Content(schema = @Schema(implementation = CartVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> deleteCart(@RequestBody CartVO vo, Authentication authentication) {

		vo.setMemberId(Integer.parseInt(authentication.getName()));
		int result = cartService.removeCart(vo);

		if (result > 0) {
			return ResponseEntity.ok("success");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}
	}

	// @PostMapping("cartCheck")
	// @ResponseBody
	// @Operation(summary = "장바구니 체크", description = "장바구니 중복 체크하는 기능입니다.")
	// @ApiResponses(value = {
	// @ApiResponse(responseCode = "200", description = "장바구니 중복 체크 성공", content =
	// @Content(schema = @Schema(implementation = CartVO.class))),
	// @ApiResponse(responseCode = "400", description = "장바구니 중복 체크 실패", content =
	// @Content(schema = @Schema(implementation = CartVO.class))),
	// @ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
	// @ApiResponse(responseCode = "500", description = "서버 오류 발생")
	// })
	// public ResponseEntity<String> cartCheck(@RequestBody CartVO vo,
	// Authentication authentication) {
	// vo.setMemberId(Integer.parseInt(authentication.getName()));
	// int result = cartService.cartCheck(vo);

	// if (result > 0) {
	// return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("duplication");
	// } else {
	// return ResponseEntity.ok("success");
	// }
	// }

	@PostMapping("updateCart")
	@ResponseBody
	@Operation(summary = "장바구니 수정", description = "장바구니 수량 수정하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "장바구니 수정 성공", content = @Content(schema = @Schema(implementation = CartVO.class))),
			@ApiResponse(responseCode = "400", description = "장바구니 수정 실패", content = @Content(schema = @Schema(implementation = CartVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> updateCart(@RequestBody CartVO vo) {

		if (vo.getCnt() > 1000) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Exceeded cnt");
		}

		int result = cartService.modifyCart(vo);
		if (result > 0) {
			return ResponseEntity.ok("success");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}
	}
}
