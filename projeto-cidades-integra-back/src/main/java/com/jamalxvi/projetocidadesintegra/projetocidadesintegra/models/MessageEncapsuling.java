package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models;

import lombok.Data;

import java.util.HashMap;

@Data
public class MessageEncapsuling {
    private String message;
    private HashMap<String, String> payload;
}
