 package com.example.demo.configuration;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import com.example.demo.member.service.impl.MemberServiceImpl;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class AuthenticationConfig {
	
	private final MemberServiceImpl memberService;
	
	@Value("${jwt.secret}")
	private String secretKey;

//	@Bean
//	protected WebSecurityCustomizer webSecurityCustomizer() {
//        return (web) -> web.ignoring()
//        		.requestMatchers(new AntPathRequestMatcher("/resources/**"))
//        		.requestMatchers(new AntPathRequestMatcher("/favicon.ico"))
//        		.requestMatchers(new AntPathRequestMatcher("/error"));
//        		//.anyRequest();
//    }
	
	@Bean
    protected SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http
                .httpBasic(httpBasic -> httpBasic.disable())
                .csrf(csrf -> csrf.disable())
                .cors(cors -> cors.disable())
                .authorizeHttpRequests(requests -> requests
                		//.requestMatchers(new AntPathRequestMatcher("/resources/**")).permitAll()
//                		.requestMatchers(new AntPathRequestMatcher("/favicon.ico")).permitAll()
//                		.requestMatchers(new AntPathRequestMatcher("/error")).permitAll()
//                		.requestMatchers(new AntPathRequestMatcher("/")).permitAll()
//                		.requestMatchers(new AntPathRequestMatcher("/**")).permitAll()
//                		.requestMatchers(new AntPathRequestMatcher("/loginForm")).permitAll()
//                		.requestMatchers(new AntPathRequestMatcher("/login")).permitAll()
//                		.requestMatchers(new AntPathRequestMatcher("/productDetail")).permitAll()
//                		.requestMatchers(new AntPathRequestMatcher("/signForm")).permitAll()
                		.requestMatchers(new AntPathRequestMatcher("/api/login")).permitAll()
                		.requestMatchers(new AntPathRequestMatcher("/api/productList")).permitAll()
                		.requestMatchers(new AntPathRequestMatcher("/api/productDetail")).permitAll()
                		.requestMatchers(new AntPathRequestMatcher("/api/reviewProductDetail")).permitAll()
                		.requestMatchers(new AntPathRequestMatcher("/api/reviewRateAvg")).permitAll()
                        .requestMatchers(new AntPathRequestMatcher("/api/**")).authenticated()
                        .anyRequest().permitAll()
                )
//                .formLogin(form -> form
//            			.loginPage("/loginForm")
//            			.defaultSuccessUrl("/")
//            			.failureUrl("/login")
//            			.permitAll()
//            		)
                .sessionManagement((sessionManagement) -> sessionManagement
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(new JwtFilter(memberService, secretKey), UsernamePasswordAuthenticationFilter.class)
                .build();
    }

}
