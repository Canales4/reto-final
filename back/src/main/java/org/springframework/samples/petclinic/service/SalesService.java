package org.springframework.samples.petclinic.service;

import java.util.Date;
import java.util.List;

import org.springframework.samples.petclinic.model.Sales;
import org.springframework.samples.petclinic.repository.SalesRepository;

public class SalesService {
	private SalesRepository salesRepository;
	// private JpaSalesRepositoryImpl salesRepository;

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

	public List<Sales> findExpiredDate(Date date) {
		return salesRepository.findByStartDateAfter(date);
	}
}
