package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Entity
@Table(name="STATE")
@Data
@Builder
public class State implements Serializable {
    @Column(name = "ID_STA")
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @Column(name = "UF")
    private String uf;

    @OneToMany(fetch = FetchType.LAZY, targetEntity = City.class, mappedBy = "state")
    private List<City> cities;
}
