package com.example.demo.member.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.member.service.MemberService;
import com.example.demo.member.vo.MemberVO;

@Controller
@RequestMapping("/api")
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
	public String login(@RequestBody MemberVO vo) {
		MemberVO result = memberService.login(vo);
		if (result != null) {
			return memberService.loginToken(String.valueOf(result.getMemberId()), result.getPw());
		}
		return "fail";
	}

	@PostMapping("/signup")
	@ResponseBody
	public String signUp(@RequestBody MemberVO vo) {
		int result = memberService.addSignUp(vo);

		if (result == 1) {
			return "success";
		} else {
			return "fail";
		}
	}

	@PostMapping("idCheck")
	@ResponseBody
	public String idCheck(@RequestBody MemberVO vo) {
		System.out.println(vo);
		int result = memberService.selectLoginChk(vo);
		if (result > 0) {
			return "duplication";
		} else {
			return "success";
		}
	}

	@GetMapping("selectMember")
	@ResponseBody
	public MemberVO selectMember(Authentication authentication) {
		MemberVO vo = new MemberVO();
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		return memberService.getMember(vo);
	}

	@PostMapping("updateMypage")
	@ResponseBody
	public String updateMypage(@RequestBody MemberVO vo, Authentication authentication) {
		vo.setMemberId(Integer.parseInt(authentication.getName()));

		System.out.println(vo);

		int result = memberService.modifyMypage(vo);
		if (result > 0) {
			return "success";
		} else if (result == -1) {
			return "duplication";
		} else {
			return "fail";
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
