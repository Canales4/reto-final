package org.springframework.samples.petclinic.repository.jpa;

<<<<<<< HEAD
import org.springframework.samples.petclinic.repository.SalesRepository;

public class JpaSalesRepositoryImpl implements SalesRepository {
=======
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Repository;
>>>>>>> 59330653a1b4210b06aa746bf79feb6561386d9d

@Repository
@Profile("jpa")
public class JpaSalesRepositoryImpl {
	
	
	
}
