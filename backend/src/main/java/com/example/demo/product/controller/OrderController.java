package com.example.demo.product.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.member.service.MemberService;
import com.example.demo.member.vo.MemberVO;
import com.example.demo.product.service.OrderService;
import com.example.demo.product.vo.AddressVO;
import com.example.demo.product.vo.CartVO;
import com.example.demo.product.vo.OrderVO;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Controller
@RequestMapping("/api")
@Tag(name = "Order", description = "주문 관련 API 입니다.")
public class OrderController {
	@Autowired
	OrderService orderService;

	@Autowired
	MemberService memberService;

	@GetMapping("selectAddrList")
	@ResponseBody
	@Operation(summary = "주소 리스트 조회", description = "주소 리스트 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "주소 리스트 조회 성공", content = @Content(schema = @Schema(implementation = AddressVO.class))),
			@ApiResponse(responseCode = "400", description = "주소 리스트 조회 실패", content = @Content(schema = @Schema(implementation = AddressVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<AddressVO>> selectAddrList(Authentication authentication) {
		AddressVO vo = new AddressVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return ResponseEntity.ok(orderService.getAddr(vo));
	}

	@GetMapping("selectAddrInfo")
	@ResponseBody
	@Operation(summary = "주소 단건 조회", description = "주소 단건 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "주소 단건 조회 성공", content = @Content(schema = @Schema(implementation = AddressVO.class))),
			@ApiResponse(responseCode = "400", description = "주소 단건 조회 실패", content = @Content(schema = @Schema(implementation = AddressVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<AddressVO> selectAddrInfo(int addrId) {
		AddressVO vo = new AddressVO();
		vo.setAddrId(addrId);
		return ResponseEntity.ok(orderService.getAddrInfo(vo));
	}

	@GetMapping("selectCartProduct")
	@ResponseBody
	@Operation(summary = "장바구니 상품 조회", description = "선택된 장바구니 상품 조회 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "장바구니 상품 조회 성공", content = @Content(schema = @Schema(implementation = OrderVO.class))),
			@ApiResponse(responseCode = "400", description = "장바구니 상품 조회 실패", content = @Content(schema = @Schema(implementation = OrderVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<CartVO>> selectCartProduct(@RequestParam String ids, Authentication authentication) {
		String[] arr = ids.split(",");
		List<CartVO> cartList = new ArrayList<>();
		for (String str : arr) {
			CartVO vo = new CartVO();
			vo.setProductId(Integer.parseInt(str));
			vo.setMemberId(Integer.parseInt(authentication.getName()));
			CartVO cart = orderService.getCartProduct(vo);
			if (cart != null) {
				cartList.add(cart);
			}
		}
		return ResponseEntity.ok(cartList);
	}

	@PostMapping("order")
	@ResponseBody
	@Operation(summary = "주문 등록", description = "주문 등록 하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "주문 등록 성공"),
			@ApiResponse(responseCode = "400", description = "주문 등록 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<?> order(@RequestBody OrderVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		memberService.modifyReserves(vo);

		int result = orderService.addOrder(vo);

		int orderId = vo.getOrderId();

		System.out.println(orderId);

		if (result > 0) {
			return ResponseEntity.ok(orderId);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}
	}

	@PostMapping("orderDetail")
	@ResponseBody
	@Operation(summary = "주문 디테일 등록", description = "주문 디테일 등록 하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "주문 디테일 등록 성공"),
			@ApiResponse(responseCode = "400", description = "주문 디테일 등록 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> orderDetail(@RequestBody OrderVO[] vo, Authentication authentication) {

		int result = 0;
		for (int i = 0; i < vo.length; i++) {
			System.out.println(vo[i]);
			vo[i].setMemberId(Integer.parseInt(authentication.getName()));
			result = orderService.addOrderDetail(vo[i]);
		}

		if (result > 0) {
			return ResponseEntity.ok("success");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}
	}

	@GetMapping("selectOrderList")
	@ResponseBody
	@Operation(summary = "주문 리스트 조회", description = "주문 리스트 조회 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "주문 리스트 조회 성공", content = @Content(schema = @Schema(implementation = OrderVO.class))),
			@ApiResponse(responseCode = "400", description = "주문 리스트 조회 실패", content = @Content(schema = @Schema(implementation = OrderVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<OrderVO>> selectOrderList(Authentication authentication) {
		OrderVO vo = new OrderVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return ResponseEntity.ok(orderService.getOrderList(vo));
	}

	@PostMapping("insertAddr")
	@ResponseBody
	@Operation(summary = "주소 등록", description = "주소 등록 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "주소 등록 성공"),
			@ApiResponse(responseCode = "400", description = "주소 등록 실패"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> insertAddr(@RequestBody AddressVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		int result = orderService.addAddr(vo);

		if (result > 0) {
			return ResponseEntity.ok("success");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}
	}

	@GetMapping("selectReserves")
	@ResponseBody
	@Operation(summary = "적립금 조회", description = "적립금 조회 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "적립금 조회 성공", content = @Content(schema = @Schema(implementation = MemberVO.class))),
			@ApiResponse(responseCode = "400", description = "적립금 조회 실패", content = @Content(schema = @Schema(implementation = MemberVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<MemberVO> selectReserves(Authentication authentication) {
		MemberVO vo = new MemberVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return ResponseEntity.ok(orderService.getReserves(vo));
	}

	// @PostMapping("selectOrderDetailList")
	// @ResponseBody
	// public List<OrderVO> selectOrderDetailList(@RequestBody OrderVO vo) {
	// return orderService.getOrderDetailList(vo);
	// }

	@GetMapping("searchOrderList")
	@ResponseBody
	@Operation(summary = "주문 검색 리스트 조회", description = "주문 검색 리스트 조회 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "주문 검색 리스트 조회 성공", content = @Content(schema = @Schema(implementation = OrderVO.class))),
			@ApiResponse(responseCode = "400", description = "주문 검색 리스트 조회 실패", content = @Content(schema = @Schema(implementation = OrderVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<?> searchOrderList(OrderVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		System.out.println(vo.getStartDate());
		if (vo.getStartDate() != "" && vo.getEndDate() != "") {
			LocalDate startDate = LocalDate.parse(vo.getStartDate(),
					DateTimeFormatter.ofPattern("yyyy-MM-dd"));
			LocalDate endDate = LocalDate.parse(vo.getEndDate(),
					DateTimeFormatter.ofPattern("yyyy-MM-dd"));

			LocalDate tenYearsAgo = LocalDate.now().minusYears(10);
			LocalDate now = LocalDate.now();

			if (startDate.isBefore(tenYearsAgo)) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("tenYearsAgo");
			}

			if (endDate.isAfter(now)) {
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("nowAfter");
			}

		}
		return ResponseEntity.ok(orderService.searchOrderList(vo));
	}

	@GetMapping("selectOrderDetailList")
	@ResponseBody
	@Operation(summary = "주문 상세 리스트 조회", description = "주문 상세 리스트 조회 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "주문 상세 리스트 조회 성공", content = @Content(schema = @Schema(implementation = OrderVO.class))),
			@ApiResponse(responseCode = "400", description = "주문 상세 리스트 조회 실패", content = @Content(schema = @Schema(implementation = OrderVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<List<OrderVO>> selectOrderDetailList(int orderId) {
		OrderVO vo = new OrderVO();
		vo.setOrderId(orderId);
		return ResponseEntity.ok(orderService.getOrderDetailList(vo));
	}
}
