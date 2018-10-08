package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.rest;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.dto.CityDto;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.MessageEncapsuling;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service.CitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

/***
 * Cities Controller
 */
@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class CitiesController {
    /**
     * City Service task fullfill the cit
     */
    @Autowired
    private CitiesService citiesService;

    /***
     * This endpoint has the responsabilty of converting the Base64 enconded string into a readable
     * object, check if the object is valid and store it in the database
     * @param encodedString the base string file, encoded
     * @param response the MessageEncapsuling containing the possible error, success messages or
     * warnings
     * @return
     */
    @RequestMapping(method = POST, value = "/upload")
    public MessageEncapsuling uploadCSV(@RequestBody String encodedString, HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        if (encodedString != null && !encodedString.isEmpty()) {
            try {
                messageEncapsuling = citiesService.buildCsv(encodedString);
            } catch (Exception e) {
                messageEncapsuling.setMessage("ERRO: AO TENTAR CONVERTER ENTIDADE");
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            messageEncapsuling.setMessage("ERRO: ARQUIVO INEXISTENTE");
        }
        return messageEncapsuling;
    }


    /***
     * This endpoint has the responsability of add a city
     * @param dto the dto containing the city to add
     * @param response the MessageEncapsuling containing the possible error, success messages or
     * warnings
     * @return
     */
    @RequestMapping(method = POST, value = "/cities/add")
    public MessageEncapsuling uploadCSV(@RequestBody CityDto dto, HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        if (dto != null && dto.getIbgeId() != null) {
            try {
                messageEncapsuling = citiesService.addCity(dto);
            } catch (Exception e) {
                messageEncapsuling.setMessage("ERRO: AO TENTAR CONVERTER ENTIDADE");
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }
        } else {
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            messageEncapsuling.setMessage("ERRO: ENTIDADE INEXISTENTE");
        }
        return messageEncapsuling;
    }

    /**
     * return a list of cities, ordered by name ASCENDING
     *
     * @param response the HttpResponse object, used to change http status code
     * @return the MessageEncapsuling containing the possible error, success messages or
     * warnings
     */
    @RequestMapping(method = GET, value = "/cities/orderedByName")
    public MessageEncapsuling getOrderedCities(HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        try {
            messageEncapsuling = citiesService.orderByName();
        } catch (Exception e) {
            messageEncapsuling.setMessage("ERRO: AO TENTAR BUSCAR AS CIDADES ORDENADAS");
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        return messageEncapsuling;
    }

    /**
     * return a list of cities, ordered by name ASCENDING
     *
     * @param response the HttpResponse object, used to change http status code
     * @return the MessageEncapsuling containing the possible error, success messages or
     * warnings
     */
    @RequestMapping(method = GET, value = "/cities/orderedByNameOnlyCapitals")
    public MessageEncapsuling getOrderedCitiesOnlyCaptals(HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        try {
            messageEncapsuling = citiesService.orderByNameOnlyCapitals();
        } catch (Exception e) {
            messageEncapsuling.setMessage("ERRO: AO TENTAR BUSCAR AS CIDADES ORDENADAS");
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        return messageEncapsuling;
    }

    /**
     * return a number of cities
     *
     * @param response the HttpResponse object, used to change http status code
     * @return the MessageEncapsuling containing the possible error, success messages or
     * warnings
     */
    @RequestMapping(method = GET, value = "/cities/count")
    public MessageEncapsuling getCount(HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        try {
            messageEncapsuling = citiesService.getCount();
        } catch (Exception e) {
            messageEncapsuling.setMessage("ERRO: AO TENTAR BUSCAR A CONTAGEM DE CIDADES");
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        return messageEncapsuling;
    }

    /**
     * return a city
     *
     * @param ibgeIdString the city id
     * @param response the HttpResponse object, used to change http status code
     * @return the MessageEncapsuling containing the possible error, success messages or
     * warnings
     */
    @RequestMapping(method = GET, value = "/cities/getId")
    public MessageEncapsuling getCount(@RequestParam("ibgeId") String ibgeIdString,
                                       HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        try {
            Long ibgeId = Long.valueOf(ibgeIdString);
            messageEncapsuling = citiesService.getCity(ibgeId);
        } catch (Exception e) {
            messageEncapsuling.setMessage("ERRO: AO TENTAR BUSCAR A CIDADE");
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        return messageEncapsuling;
    }

    /**
     * return a list of cities filtered by state id
     *
     * @param stateIdString the id of the state
     * @param response the HttpResponse object, used to change http status code
     * @return the MessageEncapsuling containing the possible error, success messages or
     * warnings
     */
    @RequestMapping(method = GET, value = "/cities/stateFilter")
    public MessageEncapsuling getCitiesByState(@RequestParam("stateId") String stateIdString,
                                       HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        try {
            Long stateId = Long.valueOf(stateIdString);
            messageEncapsuling = citiesService.selectByState(stateId);
        } catch (Exception e) {
            messageEncapsuling.setMessage("ERRO: AO TENTAR BUSCAR A CIDADE");
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        return messageEncapsuling;
    }

}
