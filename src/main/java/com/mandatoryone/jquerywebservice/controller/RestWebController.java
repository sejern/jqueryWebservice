package com.mandatoryone.jquerywebservice.controller;

import com.mandatoryone.jquerywebservice.model.Person;
import com.mandatoryone.jquerywebservice.model.Response;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/person")
public class RestWebController {

    List<Person> personList = new ArrayList<>();

    @GetMapping("/all")
    public Response getPersonList(){
        Response response = new Response(personList);
        return response;
    }

    @PostMapping("/save")
    public Response postPerson(@RequestBody Person person){
        personList.add(person);

        Response response = new Response(person);
        return response;
    }
}
