package org.springframework.samples.petclinic.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.repository.SalesRepository;
import org.springframework.stereotype.Service;

@Service
public class SalesService {
	@Autowired
	private SalesRepository salesRepository;
	
	
}
