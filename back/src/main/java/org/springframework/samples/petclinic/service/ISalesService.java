package org.springframework.samples.petclinic.service;

import java.util.Date;
import java.util.List;

import org.springframework.samples.petclinic.model.Sales;
import org.springframework.stereotype.Service;

@Service
public interface ISalesService {

	public List<Sales> getSales();

	public Sales findSalesById(int id);

	public Sales saveSales(Sales sale);

	public Sales setSales(Sales sale);

	public void deleteSalesById(int id);

	public List<Sales> findExpiredDate(Date date);
}
