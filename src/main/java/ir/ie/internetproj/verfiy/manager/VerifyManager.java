package ir.ie.internetproj.verfiy.manager;

import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.verfiy.dao.VerifyDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;

import javax.transaction.Transactional;
import java.util.List;

@Component("verifyManager")
public class VerifyManager {

    @Autowired
    private VerifyDao verifyDao;

    @Transactional
    public List<UserEntity> getListOfUsersMinusStudents(){
        return verifyDao.getListOfUsersMinusStudents("کارمند","استاد","مدیر",-1);
    }

    public ActionResult<UserEntity> setStatusUser(String id){
        int result = verifyDao.setStatusUser(Integer.parseInt(id),1);
        ActionResult<UserEntity> actionResult = new ActionResult<>();
        if(result == 1)
            actionResult.setMessage("success");
        else
            actionResult.setMessage("unsuccessfull");
        return actionResult;
    }

}
