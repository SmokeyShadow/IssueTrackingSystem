package ir.ie.internetproj.services.impl;

import ir.ie.internetproj.Repositories.CaseRepository;
import ir.ie.internetproj.entities.CaseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CaseServiceImpl implements CaseService {

    @Autowired
    private CaseRepository caseRepository;
    @Override
    public void saveCase(CaseEntity c) {
        CaseEntity ff = new CaseEntity();
        c.setAssignee(c.getAssignee());
        c.setSubject(c.getStatus());
        caseRepository.save(c);

    }
}
