package com.example.HashTag.Chat.controller;

import com.example.HashTag.Chat.model.ChatDTO;
import com.example.HashTag.Chat.model.ChatRequest;
import com.example.HashTag.Chat.service.ChatService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/hashtag/main")
@RequiredArgsConstructor
public class ChatApiController {

    private final ChatService chatService;

    @PostMapping
    public ChatDTO addChat(@RequestBody ChatRequest userChat) {
        return chatService.create(userChat);
    }


}
