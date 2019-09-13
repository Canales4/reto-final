package org.springframework.samples.petclinic.rest;

import java.util.Date;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.model.Sales;
import org.springframework.samples.petclinic.service.ISalesService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(exposedHeaders = "errors, content-type")
@RequestMapping(value = "/api/sales")
public class SalesRestController {
	@Autowired
	private ISalesService salesServ;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Sales> getAll() {
		return salesServ.getSales();
	}

	@RequestMapping(value="/{id}",method = RequestMethod.GET)
	public @ResponseBody Sales getSalesById(@PathVariable(name ="id") int id) {
		return salesServ.findSalesById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody void saveSales(@RequestBody @Valid Sales sales) {
		salesServ.saveSales(sales);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody Sales setSales(@RequestBody @Valid Sales sales) {
		return salesServ.setSales(sales);
	}

	@RequestMapping(value="/{id}", method = RequestMethod.DELETE)
	public @ResponseBody void deleteSales(@PathVariable(name ="id") int id) {
		salesServ.deleteSalesById(id);
	}

	@RequestMapping(value="/notexpired", method = RequestMethod.GET)
	public @ResponseBody List<Sales> findExpiredDate(Date date) {
		return salesServ.findExpiredDate(date);
	}

}
