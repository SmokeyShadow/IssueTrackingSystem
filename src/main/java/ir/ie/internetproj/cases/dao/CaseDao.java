package ir.ie.internetproj.cases.dao;

import ir.ie.internetproj.cases.entities.CaseEntity;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Component("caseDao")
public class CaseDao {
    @PersistenceContext
    private EntityManager manager;

    public CaseEntity setCase(CaseEntity entity){
        manager.persist(entity);
        return entity;
    }
}
