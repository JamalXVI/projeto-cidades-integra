package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.MessageEncapsuling;

public interface CitiesService {

    /**
     * Convert and Save a CSV file into the database
     *
     * @param encodedString the base64 string to convert
     * @return A MessageEncapsuling object containing the error
     * @throws Exception in caso of any error
     */
    public MessageEncapsuling buildCsv(String encodedString) throws Exception;

    /**
     * @return MessageEncapsuling object containing the city ordered by name
     * @throws Exception
     */
    public MessageEncapsuling orderByName() throws Exception;
}
