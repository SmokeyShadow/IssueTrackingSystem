package ir.asta.training.contacts.services;

import ir.asta.training.contacts.entities.UserEntity;
import ir.asta.wise.core.datamanagement.ActionResult;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.awt.*;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Path("/auth")
public interface AuthService {
    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/register")
    public ActionResult<UserEntity> register(@FormParam("login-user") String username,
                                 @FormParam("registerpass") String password, @FormParam("registeremail") String email, @FormParam("role") String role) throws UnsupportedEncodingException, NoSuchAlgorithmException;
}
