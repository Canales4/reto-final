package org.springframework.samples.petclinic.service;

import java.util.List;

import org.springframework.samples.petclinic.model.Sales;
import org.springframework.samples.petclinic.repository.SalesRepository;

public class SalesService {
	private SalesRepository salesRepository;

	public List<Sales> getSales() {
		return salesRepository.findAll();
	}

	public Sales findSalesById(int id) {
		return salesRepository.findOne(id);
	}

	public Sales saveSales(Sales sale) {
		return salesRepository.save(sale);
	}

	public Sales setSales(Sales sale) {
		return salesRepository.save(sale);
	}

	public void deleteSalesById(int id) {
		salesRepository.delete(id);
	}
}
