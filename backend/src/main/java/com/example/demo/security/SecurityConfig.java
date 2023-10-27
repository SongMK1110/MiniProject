//package com.example.demo.security;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
//import org.springframework.security.config.http.SessionCreationPolicy;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.web.SecurityFilterChain;
//import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig {
//
//	private final JwtTokenProvider jwtTokenProvider;
//	
//	public SecurityConfig(JwtTokenProvider jwtTokenProvider) {
//        this.jwtTokenProvider = jwtTokenProvider;
//    }
//
//	@Bean
//	protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
//		http.httpBasic(AbstractHttpConfigurer::disable).csrf(AbstractHttpConfigurer::disable)
//				.cors(AbstractHttpConfigurer::disable)
//				.sessionManagement(
//						(sessionManagement) -> sessionManagement.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
//				.authorizeHttpRequests(requests -> requests
//	                       .requestMatchers("/login").permitAll()
////	                       .requestMatchers(HttpMethod.POST, "/api/v1/posts/*").permitAll()
////	                       .requestMatchers(HttpMethod.GET,"/api/v1/hello/api-auth-test").authenticated()
//	                       .anyRequest().authenticated())
//				.addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider), UsernamePasswordAuthenticationFilter.class);
////         .logout(withDefaults());
//
//		return http.build();
//	}
//
//	@Bean
//	protected PasswordEncoder passwordEncoder() {
//		return PasswordEncoderFactories.createDelegatingPasswordEncoder();
//	}
//}
