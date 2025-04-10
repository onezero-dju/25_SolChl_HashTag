package com.example.HashTag.Chat.service;

import com.example.HashTag.Chat.db.ChatEntity;
import com.example.HashTag.Chat.model.ChatDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ChatConverter {


    public ChatDTO toDto(ChatEntity chatEntity) {
        return ChatDTO.builder()
                .userMessage(chatEntity.getUserMessage())
                .chatDate(chatEntity.getChatDate())
                .build();
    }


}
