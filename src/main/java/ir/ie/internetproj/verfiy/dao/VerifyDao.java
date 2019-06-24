package ir.ie.internetproj.verfiy.dao;

import ir.ie.internetproj.auth.entities.UserEntity;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Component("verifyDao")
public class VerifyDao {

    @PersistenceContext
    private EntityManager entityManager;

    public List<UserEntity> getListOfUsersMinusStudents(String role1,String role2,String role3,int verified){
        Query query = entityManager.createQuery("select e from UserEntity e where e.verified=:verified and (e.role=:role1 or e.role=:role2 or e.role=:role3)");
        query.setParameter("role1",role1).setParameter("role2",role2).setParameter("role3",role3).setParameter("verified",verified);
        List list = query.getResultList();
        if(list.size()>0)
            return list;
        return null;
    }

    @Transactional
    public int setStatusUser(int id,int verified) {
        Query query = entityManager.createQuery("update UserEntity e set e.verified=:verified where e.id=:id");
        query.setParameter("verified",verified).setParameter("id",id);
        return query.executeUpdate();
    }
}
