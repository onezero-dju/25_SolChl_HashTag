package com.example.HashTag.helper.converter;

import com.example.HashTag.helper.constants.SocialLoginType;
import com.fasterxml.jackson.databind.JavaType;
import com.fasterxml.jackson.databind.type.TypeFactory;
import com.fasterxml.jackson.databind.util.Converter;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SocialLoginTypeConverter implements Converter<String, SocialLoginType> {


    @Override
    public SocialLoginType convert(String s) {
        return null;
    }

    @Override
    public JavaType getInputType(TypeFactory typeFactory) {
        return null;
    }

    @Override
    public JavaType getOutputType(TypeFactory typeFactory) {
        return null;
    }
}
