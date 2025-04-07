package com.example.HashTag.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .authorizeHttpRequests(authorizeRequests ->
                        authorizeRequests
                                .requestMatchers("/auth/google", "/auth/kakao", "/auth/naver").permitAll() // 소셜 로그인 엔드포인트는 인증 없이 접근 가능
                                .anyRequest().authenticated() // 그 외의 요청은 인증이 필요
                )
                .formLogin(formLogin ->
                        formLogin
                                .loginPage("/login") // 커스텀 로그인 페이지 설정
                                .permitAll() // 로그인 페이지는 누구나 접근 가능
                )
                .csrf(csrf -> csrf.disable()); // 개발 시 CSRF 보호를 비활성화
        return http.build();
    }
}
