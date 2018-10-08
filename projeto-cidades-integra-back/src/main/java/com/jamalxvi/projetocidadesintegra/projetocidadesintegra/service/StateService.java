package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.dto.StateCounterDto;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.MessageEncapsuling;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.State;

import java.util.List;

public interface StateService {
    /***
     * Find the state that contains the highest number of cities and the state that has the
     * lowest number os cities
     * @return a List containing the hightest populated (in number of cities) state and the lowest
     */
    public MessageEncapsuling<List<StateCounterDto>> hightestAndLowestStatesPopulateOfCities();

    /***
     * Find all the states
     * @return a List containing all the states
     */
    public MessageEncapsuling<List<State>> findAll();
}
