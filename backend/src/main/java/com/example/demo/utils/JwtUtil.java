package com.example.demo.utils;

import java.util.Date;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {

	public static String getUserName(String token, String secretKey) {
		return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
				.getBody().get("userName", String.class);
	}

	public static boolean isExpired(String token, String secretKey) {
		try {
			return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token)
					.getBody().getExpiration().before(new Date());
		} catch (ExpiredJwtException e) {
			return true; // 토큰이 만료되었을 경우
		} catch (Exception e) {
			// 다른 예외가 발생할 경우 처리
			e.printStackTrace(); // 또는 로깅 등의 작업을 수행
			return false; // 예외 발생 시 기본적으로 토큰이 만료되지 않았다고 가정
		}

	}

	public static String createJwt(String userName, String secretKey, Long expiredMs) {
		Claims claims = Jwts.claims();
		claims.put("userName", userName);

		return Jwts.builder().setClaims(claims).setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + expiredMs))
				.signWith(SignatureAlgorithm.HS256, secretKey).compact();
	}

}
