package ir.ie.internetproj.verfiy.services.Imp;

import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.verfiy.manager.VerifyManager;
import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;
import java.util.List;
import java.util.Vector;

@Component("verifyService")
public class VerifyServiceImp implements ir.ie.internetproj.verfiy.services.VerifyService {

    @Autowired
    private VerifyManager manager;

    @Override
    public List<UserEntity> getListOfUsersMinusStudents() {
        List<UserEntity> list = manager.getListOfUsersMinusStudents();
        JSONObject responseDetailsJson = new JSONObject();
        JSONArray jsonArray = new JSONArray();

        List<UserEntity> userList = new Vector<UserEntity>(list.size());
        for(UserEntity userEntity : list) {
            userList.add(userEntity);
            JSONObject formDetailsJson = new JSONObject();
            formDetailsJson.put("id", userEntity.getId());
            formDetailsJson.put("email", userEntity.getEmail());
            formDetailsJson.put("name",userEntity.getName());
            formDetailsJson.put("role",userEntity.getRole());
            jsonArray.add(formDetailsJson);
        }
        responseDetailsJson.put("forms", jsonArray);//Here you can see the data in json format

        return userList;

    }

    @Override
    public ActionResult<UserEntity> setStatusOfUser(String id) {
        return manager.setStatusUser(id);
    }
}
