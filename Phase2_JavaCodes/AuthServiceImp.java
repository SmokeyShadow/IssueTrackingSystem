package ir.asta.training.contacts.services.impl;


import ir.asta.training.contacts.entities.UserEntity;
import ir.asta.training.contacts.manager.AuthManager;
import ir.asta.training.contacts.services.AuthsService;
import ir.asta.wise.core.datamanagement.ActionResult;

import javax.inject.Inject;
import javax.inject.Named;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

@Named("authService")
public class AuthServiceImp implements AuthsService {
    @Inject
    private AuthManager manager;
    @Override
    public ActionResult<UserEntity> login(String username, String password) throws UnsupportedEncodingException, NoSuchAlgorithmException {
        return manager.login(username, password);
    }
}

