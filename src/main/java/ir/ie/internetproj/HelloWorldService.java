package ir.ie.internetproj;

import org.springframework.stereotype.Service;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("hello")
@Service
public class HelloWorldService {

    @GET
    @Path("/{param}")
    @Produces({ MediaType.TEXT_PLAIN})
    public Response getMsg(@PathParam("param") String msg) {

        String output = "Jersey say : " + msg;

        return Response.status(200).entity(output).build();

    }
//    @POST
//    @Path("/add")
//    public Response addUser(
//            @FormParam("name") String name,
//            @FormParam("age") int age) {
//
//        return Response.status(200)
//                .entity("addUser is called, name : " + name + ", age : " + age)
//                .build();
//
//    }


}