package ir.ie.internetproj.auth.services;

import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.cases.entities.CaseEntity;
import wise.core.datamanagement.ActionResult;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.util.List;

@Path("auth")
public interface AuthService {
    @Path("/register")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<String> registerUser(UserEntity user);

    @Path("/login")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<UserEntity> loginUser(UserEntity user);


    @Path("/changepass")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @POST
    public ActionResult<String> changePasswod(
            @FormParam("prevpass") String prevPass ,
            @FormParam("newpass") String newpass ,
            @FormParam("renewpass") String renewpass,
            @FormParam("name") String name);

    @Path("/changeprofile")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @POST
    public ActionResult<String> changeProfile(
            @FormParam("prevuser") String prevuser ,
            @FormParam("newuser") String newuser ,
            @FormParam("newemail") String newemail);

    @Path("/allusers")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public ActionResult<List<UserEntity>> getAllUsers(
    ) throws IOException;
}
