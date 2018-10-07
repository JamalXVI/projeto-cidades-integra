package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models;

import lombok.Builder;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;
import java.math.BigDecimal;

@Entity
@Table(name="CITY")
@Data
@Builder
public class City implements Serializable {

    @Column(name = "IBGE_ID")
    @Id
    private Long ibgeId;
    @ManyToOne(fetch = FetchType.EAGER, targetEntity = State.class)
    @JoinColumn(name = "ID_STA")
    private State state;
    @Column(name = "NAME")
    private String name;
    @Column(name = "CAPITAL")
    private Boolean capital;
    @Column(name = "LONGI", scale = 19, precision = 23)
    private BigDecimal longitude;
    @Column(name = "LAT", scale = 19, precision = 23)
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
