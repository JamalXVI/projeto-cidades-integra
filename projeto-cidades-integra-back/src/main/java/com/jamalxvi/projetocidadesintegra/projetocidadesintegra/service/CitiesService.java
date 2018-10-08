package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.dto.CityDto;
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

    /**
     * @return MessageEncapsuling object containing the number of cities
     * @throws Exception
     */
    public MessageEncapsuling getCount() throws Exception;

    /**
     * get selected city
     * @return MessageEncapsuling object containing a selected city
     * @throws Exception
     */
    public MessageEncapsuling getCity(Long ibgeId) throws Exception;

    /**
     * remove city by Id
     * @return MessageEncapsuling object containing a selected city
     * @throws Exception
     */
    public MessageEncapsuling removeCity(Long ibgeId) throws Exception;

    /**
     * Order a List of Cities by name and only the ones who are capitals
     * @return MessageEncapsuling object containing the city ordered by name
     * @throws Exception
     */
    public MessageEncapsuling orderByNameOnlyCapitals() throws Exception;

    /**
     * Order a List of Cities filtered by state.
     * @return MessageEncapsuling object containing the city ordered by name
     * @throws Exception
     */
    public MessageEncapsuling selectByState(Long stateId) throws Exception;

    /**
     * Add a city to repository
     * @param  dto the dto containing the city to add
     * @return MessageEncapsuling object containing the city ordered by name
     * @throws Exception
     */
    public MessageEncapsuling addCity(CityDto dto) throws Exception;


    /**
     * return the Cities with maximum distance
     * @return MessageEncapsuling object containing the city ordered by name
     * @throws Exception
     */
    public MessageEncapsuling mostDistancedCities() throws Exception;
}
