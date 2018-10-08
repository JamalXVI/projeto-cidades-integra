package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service.impl;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.dto.StateCounterDto;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.City;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.MessageEncapsuling;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.State;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.repository.StateRepository;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service.StateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class StateServiceImpl implements StateService {


    @Autowired
    private StateRepository stateRepository;

    @Override
    public MessageEncapsuling<List<StateCounterDto>> hightestAndLowestStatesPopulateOfCities() {
        MessageEncapsuling<List<StateCounterDto>> message = new MessageEncapsuling<>();
        List<State> allStates = stateRepository.findAll();
        if(allStates.size() > 0){
            List<State> orderedList = allStates.parallelStream().sorted(Comparator.comparingLong(state -> state.getCities().size()))
                    .collect(Collectors.toList());
            StateCounterDto highest = new StateCounterDto();
            highest.setState(orderedList.get(orderedList.size()-1));
            highest.setNumberOfCities(Long.valueOf(highest.getState().getCities().size()));
            StateCounterDto lowest = new StateCounterDto();
            lowest.setState(orderedList.get(0));
            lowest.setNumberOfCities(Long.valueOf(lowest.getState().getCities().size()));
            List<StateCounterDto> dto = new ArrayList<>();
            dto.add(highest);
            dto.add(lowest);
            message.setPayload(dto);
        }else{
            message.setMessage("ERRO: LISTA VAZIA!");
        }
        return message;
    }

    @Override
    public MessageEncapsuling<List<State>> findAll() {
        MessageEncapsuling<List<State>> message = new MessageEncapsuling();
        List<State> payload = stateRepository.findAll();
        if (payload.size() > 0){
            message.setPayload(payload);
        }else{
            message.setMessage("ERRO: LISTA VAZIA!");
        }
        return message;
    }
}
