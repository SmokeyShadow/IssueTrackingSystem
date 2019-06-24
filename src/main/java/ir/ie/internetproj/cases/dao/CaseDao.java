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
            query = manager.createQuery("select e from UserEntity e where  e.id =:id ");
            List<UserEntity> users = query.setParameter("id", en.getAssigner()).getResultList();
            if(!role.trim().equals("مدیر"))
                en.setAssigneeName(name);
            else {
                List<UserEntity> assigneeUsers = query.setParameter("id", en.getAssignee()).getResultList();
                en.setAssigneeName(assigneeUsers.get(0).getName());
            }
            en.setAssignerName(users.get(0).getName());
        }
        return list;
    }

    public List<CaseEntity> getCasesStatus(int id, String name) {
        Query query;
        List<CaseEntity> list;
        query = manager.createQuery("select e from CaseEntity e where  e.assigner =:id ");
        list = query.setParameter("id", id).getResultList();
        for (CaseEntity en:list){
            en.setAssignerName(name);
            query = manager.createQuery("select e from UserEntity e where  e.id =:id ");
            List<UserEntity> users = query.setParameter("id", en.getAssignee()).getResultList();
            en.setAssigneeName(users.get(0).getName());
        }
        return list;
    }

    public boolean setRate(int id, String rate) {
        Query query = manager.createQuery("select e from CaseEntity e where  e.id =:id ");
        List<CaseEntity> list = query.setParameter("id", id).getResultList();
        list.get(0).setRate(rate);
        CaseEntity en = manager.merge( list.get(0));
        if(en != null)
            return true;
        return false;
    }

    public List<UserEntity> getAssigneeList(int id) {
        Query query = manager.createQuery("select distinct e  from UserEntity  e where e.id in (select distinct  e.assignee from CaseEntity e where  e.assigner =:id) ");
        List<UserEntity> list = query.setParameter("id", id).getResultList();
        return list;
    }
}
