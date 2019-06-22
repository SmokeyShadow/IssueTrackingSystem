package ir.ie.internetproj;
import javax.ws.rs.ApplicationPath;
import javax.xml.bind.JAXBContext;

import org.apache.cxf.jaxrs.ext.multipart.Multipart;

import org.glassfish.jersey.jackson.JacksonFeature;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;

import java.util.logging.Logger;

@Configuration
@ApplicationPath("/rest")
public class JerseyConfig extends ResourceConfig {

    public JerseyConfig() {
        packages("ir.ie.internetproj");

    }

}