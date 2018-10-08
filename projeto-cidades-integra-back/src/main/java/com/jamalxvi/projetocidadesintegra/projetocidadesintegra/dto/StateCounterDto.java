package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.dto;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.State;
import lombok.Data;

@Data
public class StateCounterDto {
    private State state;
    private Long numberOfCities;
}
