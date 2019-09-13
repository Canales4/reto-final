package org.springframework.samples.petclinic.repository.jpa;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.model.Sales;
import org.springframework.samples.petclinic.repository.SalesRepository;
import org.springframework.samples.petclinic.service.ISalesService;
import org.springframework.stereotype.Service;

@Service
public class JpaSalesRepositoryImpl implements ISalesService {

	@Autowired
	SalesRepository salesRepository;

	public List<Sales> findAllExpiredDate() {

		return null;
	}

	@Override
	public List<Sales> getSales() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Sales findSalesById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Sales saveSales(Sales sale) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Sales setSales(Sales sale) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void deleteSalesById(int id) {
		// TODO Auto-generated method stub

	}

}
