package com.example.demo.configuration;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.demo.member.service.MemberService;
import com.example.demo.member.service.impl.MemberServiceImpl;
import com.example.demo.utils.JwtUtil;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Slf4j
public class JwtFilter extends OncePerRequestFilter {

	private final MemberServiceImpl memberService;
	private final String secretKey;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		try {
			final String authorization = request.getHeader(HttpHeaders.AUTHORIZATION);
			System.out.println(secretKey);
			log.info("authorization:{}", authorization);

			// token 안보내면 block
			if (authorization == null || !authorization.startsWith("Bearer ")) {
				log.error("authorization을 잘못 보냈습니다.", authorization);
				filterChain.doFilter(request, response);
				return;
			}

			// Token꺼내기
			String token = authorization.split(" ")[1];

			// Token Expired되었는지 여부
			if (JwtUtil.isExpired(token, secretKey)) {
				log.error("Token이 만료 되었습니다.");
				// 만료된 경우 로그아웃 등의 작업을 수행할 수 있습니다.
				// 예를 들어, 로그아웃 URL로 리다이렉트하거나 다른 작업을 수행할 수 있습니다.
				response.sendRedirect("/logout"); // 로그아웃 URL로 수정하세요
				return;
			}

			// UserName Token에서 꺼내기
			String userName = JwtUtil.getUserName(token, secretKey);
			log.info("userName:{}", userName);

			// 권한 부여
			UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(userName,
					null, List.of(new SimpleGrantedAuthority("USER")));

			// Detail을 넣어줍니다
			authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
			SecurityContextHolder.getContext().setAuthentication(authenticationToken);
			filterChain.doFilter(request, response);

		} catch (Exception e) {
			// 예외가 발생한 경우 처리
			e.printStackTrace(); // 또는 로깅 등의 작업을 수행
			// 예를 들어, 오류 페이지로 리다이렉트할 수 있습니다.
			response.sendRedirect("/error"); // 에러 페이지 URL로 수정하세요
		}
	}

}
