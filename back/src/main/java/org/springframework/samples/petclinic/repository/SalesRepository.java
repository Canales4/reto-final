package org.springframework.samples.petclinic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.samples.petclinic.model.Sales;

public interface SalesRepository extends JpaRepository<Sales, Integer>{
	
	List<Sales> FindByExpiredDate();

}
