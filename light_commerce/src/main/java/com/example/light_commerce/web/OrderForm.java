package com.example.light_commerce.web;

import java.util.ArrayList;
import java.util.List;

import com.example.light_commerce.entities.Client;

import lombok.Data;

@Data
public class OrderForm {
	private Client client=new Client();
    private List<OrderProduct> products=new ArrayList<>();
}