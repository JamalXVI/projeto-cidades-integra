package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.rest;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.MessageEncapsuling;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service.CitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;

import static org.springframework.web.bind.annotation.RequestMethod.POST;

/***
 * Main Controller
 */
@RestController
@RequestMapping( value = "/api", produces = MediaType.APPLICATION_JSON_VALUE )
public class CitiesController {
    /** City Service task fullfill the cit */
    @Autowired
    private CitiesService citiesService;

    /***
     * Connection Test Method
     * @return
     */
    @RequestMapping( method = POST, value= "/upload")
    public MessageEncapsuling uploadCSV(@RequestBody String encodedString, HttpServletResponse response) {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        if(encodedString != null && !encodedString.isEmpty()){
            try {
                messageEncapsuling = citiesService.buildCsv(encodedString);
            } catch (Exception e) {
                messageEncapsuling.setMessage("ERRO: AO TENTAR CONVERTER ENTIDADE");
                response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            }
        }else{
            response.setStatus(HttpServletResponse.SC_INTERNAL_SERVER_ERROR);
            messageEncapsuling.setMessage("ERRO: ARQUIVO INEXISTENTE");
        }
        return messageEncapsuling;
    }

}
