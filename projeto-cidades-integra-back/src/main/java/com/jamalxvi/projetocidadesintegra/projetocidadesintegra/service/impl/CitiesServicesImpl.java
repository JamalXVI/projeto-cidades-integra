package com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service.impl;

import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.City;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.MessageEncapsuling;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.models.State;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.repository.CityRepository;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.repository.StateRepository;
import com.jamalxvi.projetocidadesintegra.projetocidadesintegra.service.CitiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class CitiesServicesImpl implements CitiesService {
    @Autowired
    private StateRepository stateRepository;
    @Autowired
    private CityRepository cityRepository;


    @Override
    public MessageEncapsuling buildCsv(String encodedString) throws Exception {
        MessageEncapsuling messageEncapsuling = new MessageEncapsuling();
        try {
            Base64.Decoder decoder = Base64.getDecoder();
            byte[] decodedByteArray = decoder.decode(encodedString);
            String text = new String(decodedByteArray);
            Boolean firstLine = false;
            List<State> states = stateRepository.findAll();
            List<City> cities = cityRepository.findAll();
            List<State> statesToAdd = new ArrayList<>();
            List<City> citiesToAdd = new ArrayList<>();
            for (String line : text.split("\n")) {
                if (!firstLine) {
                    firstLine = true;
                } else {
                    String[] cells = line.split(",");
                    Long id = Long.parseLong(cells[0]);
                    if (cities.parallelStream().anyMatch(city -> city.getIbgeId().equals(id))){
                        continue;
                    }
                    String currrentStateString = cells[1];
                    State currentState = states.stream().filter(state -> state.getUf().equals(currrentStateString))
                            .findFirst().orElse(null);
                    if (currentState == null) {
                        currentState = State.builder().uf(currrentStateString).build();
                        statesToAdd.add(currentState);
                        states.add(currentState);
                    }
                    City city = City.builder().ibgeId(id)
                            .state(currentState)
                            .name(cells[2]).capital(!cells[3].isEmpty())
                            .longitude(new BigDecimal(cells[4])).latitude(new BigDecimal(cells[5]))
                            .nameWithOutAccent(cells[6]).alternativaName(cells[7]).microRegion(cells[8])
                            .mesoRegion(cells[9]).build();
                    citiesToAdd.add(city);
                }
            }

            if (firstLine && citiesToAdd.size() > 0){
                statesToAdd.stream().forEach(state -> {
                    stateRepository.save(state);
                });
                citiesToAdd.stream().forEach(city -> {
                    cityRepository.save(city);
                });
                messageEncapsuling.setMessage("Sucesso ao Cadastrar");
            }else{
                messageEncapsuling.setMessage("ERRO: NENHUMA CIDADE NOVA A CADASTRAR");
            }
        } catch (Exception e) {
            throw e;
        }
        return messageEncapsuling;
    }

    @Override
    public MessageEncapsuling orderByName() throws Exception {
        MessageEncapsuling<List<City>> message = new MessageEncapsuling();
        List<City> payload = cityRepository.findAll().stream().sorted(Comparator.comparing(City::getName))
                .collect(Collectors.toList());
        if (payload.size() > 0){
            message.setPayload(payload);
        }else{
            message.setMessage("ERRO: LISTA VAZIA!");
        }
        return message;
    }

    @Override
    public MessageEncapsuling getCount() throws Exception {
        MessageEncapsuling<Long> message = new MessageEncapsuling();
        List<City> cities = cityRepository.findAll();
        if (cities.size() > 0){
            message.setPayload(Long.valueOf(cities.size()));
        }else{
            message.setMessage("ERRO: LISTA VAZIA!");
        }
        return message;
    }

    @Override
    public MessageEncapsuling getCity(Long ibgeId) throws Exception {
        MessageEncapsuling<City> message = new MessageEncapsuling();
        City city = cityRepository.findById(ibgeId).orElse(null);
        if (city != null){
            message.setPayload(city);
        }else{
            message.setMessage("ERRO: CIDADE NÃO ENCONTRADA");
        }
        return message;
    }

    @Override
    public MessageEncapsuling orderByNameOnlyCapitals() throws Exception {
        MessageEncapsuling<List<City>> message = new MessageEncapsuling();
        List<City> payload = cityRepository.findByCapital(true).stream().sorted(Comparator.comparing(City::getName))
                .collect(Collectors.toList());
        if (payload.size() > 0){
            message.setPayload(payload);
        }else{
            message.setMessage("ERRO: LISTA VAZIA!");
        }
        return message;
    }
}
