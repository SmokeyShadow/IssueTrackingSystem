package ir.ie.internetproj.auth.services.impl;
import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.auth.manager.UserManager;
import ir.ie.internetproj.auth.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;

import java.io.IOException;
import java.util.List;

@Component("userService")
public class AuthServiceImpl implements AuthService {
    @Autowired
    private UserManager userManager;
    @Override
    public ActionResult<String> registerUser(UserEntity user) {
        return userManager.setUser(user);
    }

    @Override
    public ActionResult<UserEntity> loginUser(UserEntity user) {
        return userManager.login(user);
    }

    @Override
    public ActionResult<String> changePasswod(String prevPass, String newpass, String renewpass , String name) {
        return userManager.changePassword(prevPass , newpass, renewpass ,  name);
    }

    @Override
    public ActionResult<String> changeProfile(String prevuser , String newuser, String newemail) {
        return userManager.changeProfile(prevuser,newuser, newemail);
    }

    @Override
    public ActionResult<List<UserEntity>> getAllUsers() throws IOException {
        return userManager.getAllUser();
    }
}
