package ir.ie.internetproj.verfiy.services;

import ir.ie.internetproj.auth.entities.UserEntity;
import wise.core.datamanagement.ActionResult;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("authorize")
public interface VerifyService {

    @Path("/submit")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public List<UserEntity> getListOfUsersMinusStudents();

    @Path("/s/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<UserEntity> setStatusOfUser(@PathParam("id") String id);
}
