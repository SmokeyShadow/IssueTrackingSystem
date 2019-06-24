package ir.ie.internetproj.manage.manager;

import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.manage.dao.ManageDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Component("manageManager")
public class ManageManager {

    @Autowired
    private ManageDao dao;

    @Transactional
    public List<UserEntity> getListOfStudents(){
        return dao.getListOfUsersMinusStudents("دانشجو");
    }

    public ActionResult<UserEntity> changeStatus(String userID) {
        int result = dao.changeStatus((userID),1);
        ActionResult<UserEntity> actionResult = new ActionResult<>();
        if(result == 1)
            actionResult.setMessage("success");
        else
            actionResult.setMessage("unsuccessfull");
        return actionResult;
    }

    public ActionResult<UserEntity> setInactive(String userID) {
        int result = dao.setInactive((userID),-1);
        ActionResult<UserEntity> actionResult = new ActionResult<>();
        if(result == 1)
            actionResult.setMessage("success");
        else
            actionResult.setMessage("unsuccessfull");
        return actionResult;
    }

    public ActionResult<UserEntity> setActive(String userID) {
        int result = dao.setActive((userID),1);
        ActionResult<UserEntity> actionResult = new ActionResult<>();
        if(result == 1)
            actionResult.setMessage("success");
        else
            actionResult.setMessage("unsuccessfull");
        return actionResult;
    }

    public ActionResult<UserEntity> deleteUser(String userID) {
        int result = dao.deleteUser((userID));
        ActionResult<UserEntity> actionResult = new ActionResult<>();
        if(result == 1)
            actionResult.setMessage("success");
        else
            actionResult.setMessage("unsuccessfull");
        return actionResult;
    }

    public ActionResult<UserEntity> getProfile(String userID) {
        UserEntity result = dao.getProfile((userID));
        ActionResult<UserEntity> actionResult = new ActionResult<>();
        String valid = null;
        String active = null;
        if(result.getIsactive() == -1){active = "فعال";}
        else if(result.getIsactive() == 1){active = "غیر فعال";}
        if(result.getVerified() == -1){valid = "تایید نشده";}
        else if(result.getVerified() == 1){valid = "تایید شده";}
        String message = "نام و نام خانوادگی کاربر : "+result.getName()+" --- "+"ایمیل : "+result.getEmail()+" --- "+"سمت : "+result.getRole()+" --- "+"وضع فعالیت : "+active+" --- "+"وضعیت تایید : "+valid;
        if(result != null)
            actionResult.setMessage(message);
        else
            actionResult.setMessage("unsuccessfull");
        return actionResult;
    }
}
