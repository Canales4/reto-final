package org.springframework.samples.petclinic.rest;

import java.util.List;

import org.springframework.samples.petclinic.model.Sales;
import org.springframework.samples.petclinic.service.SalesService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SalesRestController {
	private SalesService salesServ;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Sales> getAll() {
		return salesServ.getSales();
	}

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody Sales getSalesById(int id) {
		return salesServ.findSalesById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody void saveSales(Sales sales) {
		salesServ.saveSales(sales);
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public @ResponseBody void deleteSales(int id) {
		salesServ.deleteSalesById(id);
	}

}
