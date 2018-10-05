package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name="CITY")
@Data
@Builder
public class City {

    @Column(name = "IBGE_ID")
    private Long ibgeId;
    @ManyToOne(fetch = FetchType.LAZY, targetEntity = State.class)
    @JoinColumn(name = "ID_STA")
    private State state;
    @Column(name = "NAME")
    private String name;
    @Column(name = "CAPITAL")
    private Boolean capital;
    @Column(name = "LONG")
    private BigDecimal longitude;
    @Column(name = "LAT")
    private BigDecimal latitude;
    @Column(name = "NO_ACCENTS")
    private String nameWithOutAccent;
    @Column(name = "ALTERNATIVE_NAMES")
    private String alternativaName;
    @Column(name = "MICRO_REGION")
    private String microRegion;
    @Column(name = "MESO_REGION")
    private String mesoRegion;

}