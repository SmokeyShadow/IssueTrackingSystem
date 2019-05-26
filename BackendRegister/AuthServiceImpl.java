package ir.asta.training.contacts.services.impl;

import ir.asta.training.contacts.entities.UserEntity;
import ir.asta.training.contacts.manager.AuthManager;
import ir.asta.training.contacts.services.AuthService;
import ir.asta.wise.core.datamanagement.ActionResult;

import javax.inject.Inject;
import javax.inject.Named;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Named("authService")
public class AuthServiceImpl implements AuthService {
    @Inject
    private AuthManager manager;
    @Override
    public ActionResult<UserEntity> register(String username, String password, String email, String role) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        return manager.register(username, password, email, role);
    }

}
