package com.example.HashTag.Chat.db;

import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.charset.CharsetEncoder;

public interface ChatRepository extends JpaRepository<ChatEntity, Long> {
}
