package com.example.HashTag.Chat.service;

import com.example.HashTag.Chat.db.ChatEntity;
import com.example.HashTag.Chat.db.ChatRepository;
import com.example.HashTag.Chat.model.ChatDTO;
import com.example.HashTag.Chat.model.ChatRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ChatService {

    private final ChatRepository chatRepository;
    private final ChatConverter chatConverter;

    public ChatDTO create(
            @Valid
            ChatRequest chatRequest
    ) {

        var entity = ChatEntity.builder()
                .userMessage(chatRequest.getChat())
                .chatDate(LocalDateTime.now())
                .build();

        var saveEntity = chatRepository.save(entity);

        // 봇의 응답 메시지 생성 (단순 예시로 "봇의 응답" 메시지 반환)
        String botResponse = "봇의 응답: " + chatRequest.getChat();

        return chatConverter.toDto(saveEntity);
    }





}
