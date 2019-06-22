package ir.ie.internetproj.cases.services.impl;
import ir.ie.internetproj.cases.manager.CaseManager;
import ir.ie.internetproj.cases.services.CaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;

import javax.ws.rs.Consumes;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.io.*;

@Component("caseService")
public class CaseServiceImpl implements CaseService {

    @Autowired
    private CaseManager caseManager;

    @Override
    public ActionResult<String> addCase(String assigner, String date, String to, String importance, String subject, String body, String token, String status, String rate, String attachment) throws IOException {
            return caseManager.setCase(assigner , date, to, importance, subject,body,token,status , rate , attachment);
    }

    @Override
    public ActionResult<String> addtest(String assigner) throws IOException {
        ActionResult<String> result = new ActionResult<>();
       result.setMessage("dsa" + assigner);
       result.setSuccess(true);
       result.setData("d");
        System.out.println("ererresasdf");
       return result;
    }


}
