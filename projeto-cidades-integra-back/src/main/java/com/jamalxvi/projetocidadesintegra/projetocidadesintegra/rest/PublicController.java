package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

/***
 * Main Controller
 */
@RestController
@RequestMapping( value = "/api", produces = MediaType.APPLICATION_JSON_VALUE )
public class PublicController {

    /***
     * Connection Test Method
     * @return
     */
    @RequestMapping( method = GET, value= "/foo")
    public Map<String, String> getFoo() {
        Map<String, String> fooObj = new HashMap<>();
        fooObj.put("foo", "bar");
        return fooObj;
    }

}
