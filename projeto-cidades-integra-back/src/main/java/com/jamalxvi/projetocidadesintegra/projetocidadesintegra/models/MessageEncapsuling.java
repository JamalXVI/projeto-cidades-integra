package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models;

import lombok.Data;

import java.util.HashMap;

@Data
public class MessageEncapsuling<K> {
    private String message;
    private K payload;
}
