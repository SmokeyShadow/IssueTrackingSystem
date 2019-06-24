package ir.ie.internetproj.doCase.services.impl;

import ir.ie.internetproj.doCase.manager.DoCaseManager;
import ir.ie.internetproj.doCase.services.DoCaseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;

import javax.ws.rs.FormParam;

@Component("doCaseService")
public class DoCaseServiceImp implements DoCaseService {

    @Autowired
    private DoCaseManager doCaseManager;

    @Override
    public ActionResult<String> addDoCase(String status,String assignee,String text){
        return doCaseManager.setDoCase(status, assignee, text);
    }

}
