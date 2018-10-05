package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name="ESTATE")
@Data
@Builder
public class State {
    @Column(name = "ID_STA")
    private Long id;
    @Column(name = "UF")
    private String uf;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = City.class, mappedBy = "state")
    private List<City> cities;
}
