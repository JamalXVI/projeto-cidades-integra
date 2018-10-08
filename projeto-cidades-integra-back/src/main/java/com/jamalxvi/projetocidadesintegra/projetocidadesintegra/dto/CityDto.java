package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.dto;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.State;
import lombok.Data;
import org.springframework.beans.factory.annotation.Required;

import javax.persistence.*;
import java.math.BigDecimal;

@Data
public class CityDto {
    private Long ibgeId;
    private Long stateId;
    private String name;
    private Boolean capital;
    private String longitude;
    private String latitude;
    private String nameWithOutAccent;
    private String alternativaName;
    private String microRegion;
    private String mesoRegion;
}
