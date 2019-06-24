package ir.ie.internetproj.doCase.manager;


import ir.ie.internetproj.auth.dao.AuthDao;
import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.cases.entities.CaseEntity;
import ir.ie.internetproj.doCase.dao.DoCaseDao;
import ir.ie.internetproj.doCase.entities.DoCaseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;

@Component("doCaseManager")
public class DoCaseManager {

    @Autowired
    private AuthDao authDao;

    @Autowired
    private DoCaseDao doCaseDao;


    public ActionResult<String> setDoCase(String status, String assignee, String text) throws IOException{
        ActionResult<String> result = new ActionResult<>();
        String[] messages = validateDoCase(status, assignee, text);
        UserEntity toEntity = authDao.containsUserAndValid(assignee);
        if(messages.length <= 0 && toEntity != null){
            DoCaseEntity doCaseEntity = new DoCaseEntity(status, toEntity.getId(), text);
            doCaseDao.setDoCase(doCaseEntity);
            result.setSuccess(true);
            result.setMessage("با موفقیت ارسال شد");
            result.setData(null);

        }else {
            result.setMessage(String.join("\n", messages));
        }
        return result;
    }

    private String[] validateDoCase(String status,String assignee, String text){
        List<String> messages = new ArrayList<>();
        if(status == null || assignee == null){
            messages.add("وضعیت یا ارجاع شونده نمی تواند خالی باشد!");
        }

        if(text == null || text.length() == 0){
            messages.add("متن نمی تواند خالی باشد!");
        }
        String[] ans = new String[messages.size()];
        for (int i = 0; i <messages.size() ; i++) {
            ans[i] = messages.get(i);
        }
        return ans;
    }
}
