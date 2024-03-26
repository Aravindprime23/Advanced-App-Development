// // package com.connect.connect.config;

// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.context.annotation.Bean;
// // import org.springframework.context.annotation.Configuration;
// // import org.springframework.security.authentication.AuthenticationProvider;
// // import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// // import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// // import org.springframework.security.config.http.SessionCreationPolicy;
// // import org.springframework.security.web.SecurityFilterChain;
// // import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// // import org.springframework.web.cors.CorsConfiguration;
// // import org.springframework.web.cors.CorsConfigurationSource;
// // import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// // import lombok.RequiredArgsConstructor;

// // @Configuration
// // @EnableWebSecurity
// // @RequiredArgsConstructor
// // public class SecurityConfiguration {

// //     // 3.
// //     @Autowired
// //     private final JwtAuthenticationFilter jwtAuthFilter;
// //     // 4.
// //     @Autowired
// //     private final AuthenticationProvider authenticationProvider;

// //     @Bean
// //     public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
// //         httpSecurity
// //                 .cors()
// //                 .and()
// //                 .csrf()
// //                 .disable()
// //                 .authorizeHttpRequests()
// //                 .requestMatchers("/api/v1/auth/**")
// //                 .permitAll()
// //                 .anyRequest()
// //                 .authenticated()
// //                 .and()
// //                 .sessionManagement()
// //                 .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
// //                 .and()
// //                 .authenticationProvider(authenticationProvider) // 1. Here we need to tell spring which authentication
// //                                                                 // provider we are going to use
// //                 .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class); // 2. Adding a
// //                                                                                              // jwtAuthFilter
// //                                                                                              // before
// //                                                                                              // UsernamePasswordAuthenticationFilter
// //         return httpSecurity.build();
// //     }
// //     @Bean
// //     public CorsConfigurationSource corsConfigurationSource(){
// //         CorsConfiguration configuration =new CorsConfiguration();
// //         configuration.addAllowedOrigin("*");
// //         configuration.addAllowedMethod("*");
// //         configuration.addAllowedHeader("*");
// //         UrlBasedCorsConfigurationSource source=new UrlBasedCorsConfigurationSource();
// //         source.registerCorsConfiguration("/**", configuration);
// //         return source;
// //     }

// // }
// package com.connect.connect.config;

// import static com.connect.connect.utils.MyConstant.HEADERS;
// import static com.connect.connect.utils.MyConstant.METHODS;
// import static com.connect.connect.utils.MyConstant.ORIGINS;
// import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.security.authentication.AuthenticationProvider;
// import org.springframework.security.config.annotation.web.builders.HttpSecurity;
// import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
// import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
// import org.springframework.security.web.SecurityFilterChain;
// import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
// import org.springframework.web.cors.CorsConfiguration;
// import org.springframework.web.cors.CorsConfigurationSource;
// import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

// import lombok.RequiredArgsConstructor;

// @Configuration
// @EnableWebSecurity
// @RequiredArgsConstructor
// public class SecurityConfiguration {

//     private final AuthenticationProvider authenticationProvider;
//     private final JwtAuthenticationFilter jwtAuthenticationFilter;

//     @Bean
//     public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
//         http.csrf(AbstractHttpConfigurer::disable)
//                 .cors(cors -> corsConfigurationSource())
//                 .authorizeHttpRequests(
//                         authorize -> authorize.requestMatchers(
//                                 "/api/v1/auth/**",
//                                 "/swagger-ui/**",
//                                 "/swagger-ui.html/",
//                                 "/v3/api-docs/**")
//                                 .permitAll()
//                                 .anyRequest()
//                                 .authenticated())
//                 .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
//                 .authenticationProvider(authenticationProvider)
//                 .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
//         return http.build();
//     }

//     @Bean
//     public CorsConfigurationSource corsConfigurationSource() {
//         CorsConfiguration corsConfiguration = new CorsConfiguration();
//         corsConfiguration.setAllowedOrigins(ORIGINS);
//         corsConfiguration.setAllowedHeaders(HEADERS);
//         corsConfiguration.setAllowedMethods(METHODS);
//         corsConfiguration.setAllowCredentials(true);
//         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
//         source.registerCorsConfiguration("/**", corsConfiguration);
//         return source;
//     }
// }
package com.connect.connect.config;

import static org.springframework.security.config.http.SessionCreationPolicy.STATELESS;

import java.util.Arrays;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfiguration {

    private final AuthenticationProvider authenticationProvider;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .cors(cors -> cors.configurationSource(corsConfigurationSource())) // Update cors configuration
                .authorizeHttpRequests(
                        authorize -> authorize.requestMatchers(
                                "/api/v1/auth/**",
                                "/swagger-ui/**",
                                "/add","/add/**","/reg","/reg/**",
                                "/swagger-ui.html/",
                                "/v3/api-docs/**")
                                .permitAll()
                                .anyRequest()
                                .authenticated())
                .sessionManagement(session -> session.sessionCreationPolicy(STATELESS))
                .authenticationProvider(authenticationProvider)
                .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:5173")); // Add your frontend origin
        corsConfiguration.setAllowedHeaders(Arrays.asList("Authorization", "Content-Type"));
        corsConfiguration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "PUT", "DELETE", "HEAD"));
        corsConfiguration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);
        return source;
    }
}