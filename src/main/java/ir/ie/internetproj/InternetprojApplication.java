package ir.ie.internetproj;

import ir.ie.internetproj.entities.CaseEntity;
import ir.ie.internetproj.entities.UserEntity;
import ir.ie.internetproj.services.impl.CaseService;
import ir.ie.internetproj.services.impl.CaseServiceImpl;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.jdbc.DataSourceTransactionManagerAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.persistence.*;
import javax.transaction.Transactional;


@SpringBootApplication
@Repository
@Transactional
@EnableAutoConfiguration
@ComponentScan({"ir.ie.internetproj"})
@EnableJpaRepositories({"ir.ie.internetproj"})
@EntityScan({"ir.ie.internetproj"})
public class InternetprojApplication {
	private  EntityManager entityManager;


	public static void main(String[] args) {
		SpringApplication.run(InternetprojApplication.class, args);
		InternetprojApplication e = new InternetprojApplication();

//		e.entityManager.getTransaction().begin();
		CaseEntity c = new CaseEntity();
		c.setAssignee("asd");
		c.setSubject("dsadasd");
		CaseService f = new CaseServiceImpl();
		f.saveCase(c);
//		e.entityManager.persist(c);
//		e.entityManager.getTransaction().commit();
//		e.entityManager.close();
	}

}
