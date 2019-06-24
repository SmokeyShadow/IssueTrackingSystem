package ir.ie.internetproj.manage.services.Imp;

import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.manage.manager.ManageManager;
import ir.ie.internetproj.manage.services.ManagerService;
import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;

import java.util.List;
import java.util.Vector;

@Component("managerService")
public class ManageServiceImp implements ManagerService {

    @Autowired
    private ManageManager manager;

    @Override
    public List<UserEntity> getListOfStudents(){
        List<UserEntity> list = manager.getListOfStudents();
        JSONObject responseDetailsJson = new JSONObject();
        JSONArray jsonArray = new JSONArray();

        List<UserEntity> studentList = new Vector<UserEntity>(list.size());
        for(UserEntity userEntity : list) {
            studentList.add(userEntity);
            JSONObject formDetailsJson = new JSONObject();
            formDetailsJson.put("id", userEntity.getId());
            formDetailsJson.put("email", userEntity.getEmail());
            formDetailsJson.put("name",userEntity.getName());
            formDetailsJson.put("role",userEntity.getRole());
            formDetailsJson.put("verified",userEntity.getVerified());
            formDetailsJson.put("isactive",userEntity.getIsactive());
            jsonArray.add(formDetailsJson);
        }
        responseDetailsJson.put("forms", jsonArray);//Here you can see the data in json format

        return studentList;
    }

    @Override
    public ActionResult<UserEntity> changeStatus(String userID) {
        return manager.changeStatus(userID);
    }

    @Override
    public ActionResult<UserEntity> setInactive(String userID) {
        return manager.setInactive(userID);
    }

    @Override
    public ActionResult<UserEntity> setActive(String userID) {
        return manager.setActive(userID);
    }

    @Override
    public ActionResult<UserEntity> deleteUser(String userID) {
        return manager.deleteUser(userID);
    }

    @Override
    public ActionResult<UserEntity> getProfile(String userID) {
        return manager.getProfile(userID);
    }
}
