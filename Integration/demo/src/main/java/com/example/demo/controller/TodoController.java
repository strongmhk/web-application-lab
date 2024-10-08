package com.example.demo.controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/todo")
public class TodoController {
    
    @GetMapping
    public ResponseEntity<?> retrieveTodoList() {
        String response = new String("TodoOK");
        return ResponseEntity.ok().body(response);
    }

    @PostMapping
    public ResponseEntity<?> postMethodTodo(@RequestBody String item) {
        try {
            String response = new String("PostOK");
            System.out.println(item.toString());
            return ResponseEntity.ok().body(response);
        } catch (Exception e) {
            // error에 메시지를 넣어 리턴한다.
            String error = e.getMessage();
            return ResponseEntity.badRequest().body(error);
        }
    }
    
}