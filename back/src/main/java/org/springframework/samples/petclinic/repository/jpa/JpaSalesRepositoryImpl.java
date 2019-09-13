package org.springframework.samples.petclinic.repository.jpa;

import java.util.Collection;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.context.annotation.Profile;
import org.springframework.dao.DataAccessException;
import org.springframework.data.jpa.repository.Query;
import org.springframework.samples.petclinic.model.Owner;
import org.springframework.samples.petclinic.model.Sales;
import org.springframework.stereotype.Repository;

@Repository
@Profile("jpa")
public class JpaSalesRepositoryImpl {
	@PersistenceContext
    private EntityManager em;
	/*
	@Query(
	  value = "SELECT s FROM sales s WHERE s.expireDate > CURRENT_TIMESTAMP", 
	  nativeQuery = true)
	List<Sales> findAllExpiredDate();
	*/
}
