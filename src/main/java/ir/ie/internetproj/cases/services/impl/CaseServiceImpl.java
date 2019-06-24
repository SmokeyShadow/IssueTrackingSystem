package ir.ie.internetproj.cases.services.impl;
import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.cases.entities.CaseEntity;
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
import java.util.List;

@Component("caseService")
public class CaseServiceImpl implements CaseService {

    @Autowired
    private CaseManager caseManager;

    @Override
    public ActionResult<String> addCase(String assigner, String date, String to, String importance, String subject, String body, String token, String status, String rate, String attachment) throws IOException {
            return caseManager.setCase(assigner , date, to, importance, subject,body,token,status , rate , attachment);
    }

    @Override
    public ActionResult<List<CaseEntity>> getCasesCountBySubjects(String subject) throws IOException {
        return  caseManager.getCasesCountBySubjects(subject);
    }

    @Override
    public ActionResult<List<CaseEntity>> getAssignees(UserEntity user) throws IOException {
        return caseManager.getAssignees(user);
    }

    @Override
    public ActionResult<List<CaseEntity>> getCasesStatus(UserEntity user) throws IOException {
        return caseManager.getCasesStatus(user);
    }

    @Override
    public ActionResult<List<CaseEntity>> getAllCases() throws IOException {
        return caseManager.getAllCases();
    }

    @Override
    public ActionResult<String> rateCase(CaseEntity entity) throws IOException {
        return caseManager.rateCase(entity);
    }

    @Override
    public ActionResult<List<UserEntity>> getAssigneeList(UserEntity entity) throws IOException {
        return caseManager.getAssigneeList(entity);
    }

    @Override
    public ActionResult<String> updateCase(CaseEntity entity) throws IOException {
        return caseManager.updateCase(entity);
    }


}
