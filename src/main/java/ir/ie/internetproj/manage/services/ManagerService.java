package ir.ie.internetproj.manage.services;

import ir.ie.internetproj.auth.entities.UserEntity;
import wise.core.datamanagement.ActionResult;

import javax.persistence.PersistenceContext;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("manage")
public interface ManagerService {

    @Path("/submit")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public List<UserEntity> getListOfStudents();

    @Path("/verify/{userID}")
    @Produces(MediaType.APPLICATION_JSON)
    @POST
    ActionResult<UserEntity> changeStatus(@PathParam("userID")String userID);

    @Path("/inactive/{userID}")
    @Produces(MediaType.APPLICATION_JSON)
    @POST
    ActionResult<UserEntity> setInactive(@PathParam("userID")String userID);

    @Path("/active/{userID}")
    @Produces(MediaType.APPLICATION_JSON)
    @POST
    ActionResult<UserEntity> setActive(@PathParam("userID")String userID);

    @Path("/eliminate/{userID}")
    @Produces(MediaType.APPLICATION_JSON)
    @POST
    ActionResult<UserEntity> deleteUser(@PathParam("userID")String userID);

    @Path("/profile/{userID}")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    ActionResult<UserEntity> getProfile(@PathParam("userID")String userID);
}
