package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.rest;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.MessageEncapsuling;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/***
 * State Controller
 */
@RestController
@RequestMapping(value = "/api/state", produces = MediaType.APPLICATION_JSON_VALUE)
public class StateController {
    @Autowired
    private StateService stateService;


    /**
     * Get the States which has the highest and the lowest number of cities
     * @param response the HttpResponse object, used to change http status code
     * @return the MessageEncapsuling containing the possible error, object, success messages or
     * warnings
     */
    @RequestMapping(method = GET, value = "/hightestAndLowest")
    public MessageEncapsuling getHightestAndLowestStateByCities(HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        try {
            messageEncapsuling = stateService.hightestAndLowestStatesPopulateOfCities();
        } catch (Exception e) {
            messageEncapsuling.setMessage("ERRO: AO TENTAR BUSCAR AS CIDADES ORDENADAS");
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        return messageEncapsuling;
    }

    /**
     * get all states
     * @param response the HttpResponse object, used to change http status code
     * @return the MessageEncapsuling containing the possible error, object, success messages or
     * warnings
     */
    @RequestMapping(method = GET, value = "/findAll")
    public MessageEncapsuling findAll(HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        try {
            messageEncapsuling = stateService.findAll();
        } catch (Exception e) {
            messageEncapsuling.setMessage("ERRO: AO TENTAR BUSCAR AS CIDADES ORDENADAS");
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
        }
        return messageEncapsuling;
    }

}
