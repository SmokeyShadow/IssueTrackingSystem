package ir.ie.internetproj.cases.manager;
import ir.ie.internetproj.auth.dao.AuthDao;
import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.cases.dao.CaseDao;
import ir.ie.internetproj.cases.entities.CaseEntity;;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import wise.core.datamanagement.ActionResult;
import wise.core.enums.Importance;
import wise.core.response.UserResponse;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component("caseManager")
public class CaseManager {

    @Autowired
    private AuthDao authDao;

    @Autowired
    private CaseDao caseDao;


    @Transactional
    public ActionResult<String> setCase(
            String assigner,
            String date,
            String to,
            String importance,
            String subject,
            String body,
            String token,
            String status,
            String rate,
            String attachment)
 throws IOException {
        ActionResult<String> result = new ActionResult<>();
        String[] messages = validateSetCase(subject,
                to,
                importance,
                body);
        if(messages.length <= 0){

            UserEntity toEntity = authDao.containsUserAndValid(to);
            UserEntity fromEntity = authDao.containsUserAndValid(assigner);
            if(fromEntity != null) {
                if (toEntity != null) {
                    String file = null;
                    if (attachment != null) {
                        String filename = attachment;
                        Path path;
                        do {

                            int index = filename.lastIndexOf(".");
                            String fName = filename.substring(0, index);
                            String extension = filename.substring(index + 1);
                            filename = fName + "1." + extension;
                            path = Paths.get(filename);
                        } while (Files.exists(path));
                        file = filename.substring("webapps".length());
                        //  InputStream in = attachment.getObject(InputStream.class);
                        //    Files.copy(in, path);
                    }
                    CaseEntity caseEntity = new CaseEntity(subject, toEntity.getId(), fromEntity.getId(), date, body, file, status, importance, rate);
                    caseDao.setCase(caseEntity);
                    result.setSuccess(true);
                    result.setMessage("با موفقیت ارسال شد");
                    result.setData(null);
                } else {
                    result.setMessage("گیرنده نامعتبر است");
                }
            }
            else
            {
                result.setMessage("فرستنده نامعتبر است");
            }

        }else {
            result.setMessage(String.join("\n", messages));
        }
        return result;
    }

    public ActionResult<List<CaseEntity>> getAssignees(UserEntity user) {

            ActionResult<List<CaseEntity>> result = new ActionResult<>();
            List<CaseEntity> caseEntities = caseDao.getAssignees(user.getId() , user.getRole() , user.getName());

            if(caseEntities != null && caseEntities.size() > 0) {

                    result.setSuccess(true);
                    result.setMessage("با موفقیت ارسال شد");
                    result.setData(caseEntities);
            }
            else
            {
                result.setMessage("موردی وجود ندارد!");
            }

            return result;
    }

    private String[] validateSetCase(String subject,
                                     String to,
                                     String importance,
                                     String body){
        List<String> messages = new ArrayList<>();
        if(subject == null || subject.length() == 0){
            messages.add("موضوع نمی تواند خالی باشد!");
        }
        if(to == null || to.length() == 0 ){
            messages.add("ارجاع شونده نمی تواند خالی باشد!");
        }
        if(importance == null || importance.length() == 0){
            messages.add("میزان اهمیت نمی تواند خالی باشد!");
        }
        if(body == null || body.length() == 0){
            messages.add("بدنه متن نمی تواند خالی باشد!");
        }
        String[] ans = new String[messages.size()];
        for (int i = 0; i <messages.size() ; i++) {
            ans[i] = messages.get(i);
        }
        return ans;
    }


}
