package ir.ie.internetproj.doCase.dao;

import ir.ie.internetproj.doCase.entities.DoCaseEntity;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Component("doCaseDao")
public class DoCaseDao {
    @PersistenceContext
    private EntityManager manager;

    public DoCaseEntity setDoCase(DoCaseEntity entity){
        manager.persist(entity);
        return entity;
    }
}
