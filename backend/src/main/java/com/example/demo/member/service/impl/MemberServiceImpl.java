package com.example.demo.member.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.example.demo.member.mapper.MemberMapper;
import com.example.demo.member.service.MemberService;
import com.example.demo.member.vo.MemberVO;
import com.example.demo.product.vo.OrderVO;
import com.example.demo.utils.JwtUtil;

@Service
// @Transactional(readOnly = true)
// @RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {
	@Autowired
	MemberMapper memberMapper;

	@Value("${jwt.secret}")
	private String secretKey;

	private Long expiredMs = 1000 * 60 * 60 * 24l;
	// private Long expiredMs = 5000l;

	@Override
	public String loginToken(String userName, String password) {
		return JwtUtil.createJwt(userName, secretKey, expiredMs);
	}

	@Override
	public MemberVO login(MemberVO vo) {
		return memberMapper.login(vo);
	}

	@Override
	public int addSignUp(MemberVO vo) {
		return memberMapper.insertSignUp(vo);
	}

	@Override
	public int selectLoginChk(MemberVO vo) {
		return memberMapper.selectLoginChk(vo);
	}

	@Override
	public MemberVO getMember(MemberVO vo) {
		return memberMapper.selectMember(vo);
	}

	@Override
	public int modifyMypage(MemberVO vo) {
		int result = memberMapper.nicknameCheck(vo);
		if (result > 0) {
			return -1;
		} else {
			return memberMapper.updateMypage(vo);
		}
	}

	@Override
	public int modifyReserves(OrderVO vo) {
		memberMapper.reservesMinus(vo);
		return memberMapper.reservesPlus(vo);
	}
	// private final AuthenticationManagerBuilder authenticationManagerBuilder;
	// private final JwtTokenProvider jwtTokenProvider;
	//
	// @Transactional
	// public TokenInfo login(String memberId, String password) {
	// // 1. Login ID/PW 를 기반으로 Authentication 객체 생성
	// // 이때 authentication 는 인증 여부를 확인하는 authenticated 값이 false
	// UsernamePasswordAuthenticationToken authenticationToken = new
	// UsernamePasswordAuthenticationToken(memberId, password);
	//
	// // 2. 실제 검증 (사용자 비밀번호 체크)이 이루어지는 부분
	// // authenticate 매서드가 실행될 때 CustomUserDetailsService 에서 만든 loadUserByUsername
	// 메서드가 실행
	// Authentication authentication =
	// authenticationManagerBuilder.getObject().authenticate(authenticationToken);
	//
	// // 3. 인증 정보를 기반으로 JWT 토큰 생성
	// TokenInfo tokenInfo = jwtTokenProvider.generateToken(authentication);
	//
	// return tokenInfo;
	// }

}
