package com.example.demo.member.controller;

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

import com.example.demo.member.service.MemberService;
import com.example.demo.member.vo.MemberVO;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;

@Controller
@RequestMapping("/api")
@Tag(name = "Member", description = "회원관련 API 입니다.")
public class MemberController {

	@Autowired
	MemberService memberService;

	// @PostMapping("/login")
	// public TokenInfo login(@RequestBody MemberVO memberLoginRequestDto) {
	// String memberId = memberLoginRequestDto.getId();
	// String password = memberLoginRequestDto.getPw();
	// TokenInfo tokenInfo = memberService.login(memberId, password);
	// return tokenInfo;
	// }

	// @PostMapping("/login")
	// public ResponseEntity<String> login(@RequestBody MemberVO vo){
	// memberService.login(vo);
	// return ResponseEntity.ok().body(memberService.login(vo.getName(), ""));
	// }
	@PostMapping("/login")
	@ResponseBody
	@Operation(summary = "로그인", description = "로그인 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "로그인 성공"),
			@ApiResponse(responseCode = "400", description = "로그인 실패(아이디 or 비밀번호 잘못 입력)"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")

	})
	public ResponseEntity<String> login(@RequestBody MemberVO vo) {

		MemberVO result = memberService.login(vo);
		if (result != null) {
			String token = memberService.loginToken(String.valueOf(result.getMemberId()), result.getPw());
			return ResponseEntity.ok(token);
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}

	}

	@PostMapping("/signup")
	@ResponseBody
	@Operation(summary = "회원가입", description = "회원가입 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "회원가입 성공"),
			@ApiResponse(responseCode = "400", description = "회원가입 실패(아이디 중복)"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> signUp(@RequestBody MemberVO vo) {
		int result = memberService.addSignUp(vo);

		if (result == 1) {
			return ResponseEntity.ok("success");
		} else if (result == -1) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("duplication");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}

	}

	// @PostMapping("idCheck")
	// @ResponseBody
	// public String idCheck(@RequestBody MemberVO vo) {
	// System.out.println(vo);
	// int result = memberService.selectLoginChk(vo);
	// if (result > 0) {
	// return "duplication";
	// } else {
	// return "success";
	// }
	// }

	@GetMapping("selectMember")
	@ResponseBody
	@Operation(summary = "회원 정보 조회", description = "회원 정보 조회하는 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "회원 정보 조회 성공", content = @Content(schema = @Schema(implementation = MemberVO.class))),
			@ApiResponse(responseCode = "400", description = "회원 정보 조회 실패", content = @Content(schema = @Schema(implementation = MemberVO.class))),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<MemberVO> selectMember(Authentication authentication) {
		MemberVO vo = new MemberVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));
		return ResponseEntity.ok(memberService.getMember(vo));
	}

	@PostMapping("updateMypage")
	@ResponseBody
	@Operation(summary = "마이페이지 수정", description = "마이페지이 수정 기능입니다.")
	@ApiResponses(value = {
			@ApiResponse(responseCode = "200", description = "마이페이지 수정 성공"),
			@ApiResponse(responseCode = "400", description = "마이페이지 수정 실패(닉네임 중복)"),
			@ApiResponse(responseCode = "404", description = "존재하지 않는 리소스 접근"),
			@ApiResponse(responseCode = "500", description = "서버 오류 발생")
	})
	public ResponseEntity<String> updateMypage(@RequestBody MemberVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		int result = memberService.modifyMypage(vo);

		if (result > 0) {
			return ResponseEntity.ok("success");
		} else if (result == -1) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("duplication");
		} else {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("fail");
		}

	}

	// @GetMapping("/logout")
	// public String logout(HttpServletRequest request) {
	// String token = request.getHeader("Authorization");
	// System.out.println(token);
	// // 로그아웃 처리 로직을 여기에 추가합니다.
	// // 예를 들어, 세션을 종료하거나 토큰을 무효화하는 등의 작업을 수행할 수 있습니다.
	//
	// // 로그아웃 후 리다이렉트할 페이지를 반환합니다.
	// return "redirect:/loginForm"; // 로그인 페이지로 리다이렉트합니다.
	// }

	// @PostMapping("/logout")
	// @ResponseBody
	// public String logout(HttpServletRequest request) {
	// String token = request.getHeader("Authorization");
	// System.out.println(token);
	// return "success";
	// }

}
