package ir.asta.training.contacts.services;

import ir.asta.training.contacts.entities.UserEntity;
import ir.asta.wise.core.datamanagement.ActionResult;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Path("/login")
public interface AuthsService {
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/userLogIn")
    public ActionResult<UserEntity> login(@FormParam("username") String username,
                                          @FormParam("password") String password) throws UnsupportedEncodingException, NoSuchAlgorithmException;
}
