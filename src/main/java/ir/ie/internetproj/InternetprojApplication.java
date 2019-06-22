package ir.ie.internetproj;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan({"ir.ie"})
@EnableJpaRepositories({"ir.ie.internetproj"})
@ServletComponentScan
//@ImportResource({
//		"classpath:static/WEB-INF/web.xml",
//})
@EntityScan({"ir.ie"})
public class InternetprojApplication   extends Application{
	public static void main(String[] args) {

		SpringApplication.run(InternetprojApplication.class, args);

	}



}
