package ir.ie.internetproj.cases.dao;

import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.cases.entities.CaseEntity;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Component("caseDao")
public class CaseDao {
    @PersistenceContext
    private EntityManager manager;

    public CaseEntity setCase(CaseEntity entity){
        manager.persist(entity);
        return entity;
    }

    public List<CaseEntity> getAssignees(int id, String role , String name) {
        Query query;
        List<CaseEntity> list;
        if(!role.trim().equals("مدیر")) {
            query = manager.createQuery("select e from CaseEntity e where  e.assignee =:id ");
            list = query.setParameter("id", id).getResultList();
        }
        else {
            query = manager.createQuery("select e from CaseEntity e");
            list = query.getResultList();
        }
        for (CaseEntity en:list){
            en.setAssigneeName(name);
            query = manager.createQuery("select e from UserEntity e where  e.id =:id ");
            List<UserEntity> users = query.setParameter("id", en.getAssigner()).getResultList();
            en.setAssignerName(users.get(0).getName());
        }
        return list;
    }
}
