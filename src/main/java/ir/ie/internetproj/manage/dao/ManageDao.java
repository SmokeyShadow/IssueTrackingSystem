package ir.ie.internetproj.manage.dao;

import ir.ie.internetproj.auth.entities.UserEntity;
import org.springframework.stereotype.Component;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.transaction.Transactional;
import java.util.List;

@Component("managerDao")
public class ManageDao {

    @PersistenceContext
    private EntityManager entityManager;

    public List<UserEntity> getListOfUsersMinusStudents(String role){
        Query query = entityManager.createQuery("select e from UserEntity e where e.role=:role");
        query.setParameter("role",role);
        List list = query.getResultList();
        if(list.size()>0)
            return list;
        return null;
    }

    @Transactional
    public int changeStatus(String userID,int verify) {
        Query query = entityManager.createQuery("update UserEntity e set e.verified=:verified where e.id=:id");
        query.setParameter("id",Integer.parseInt(userID)).setParameter("verified",verify);
        query.executeUpdate();
        query = entityManager.createQuery("update UserEntity e set e.isactive=:verify where e.id=:id");
        query.setParameter("verify",verify).setParameter("id",Integer.parseInt(userID));
        return query.executeUpdate();
    }

    @Transactional
    public int setInactive(String userID, int i) {
        Query query = entityManager.createQuery("update UserEntity e set e.isactive=:verify where e.id=:id");
        query.setParameter("verify",i).setParameter("id",Integer.parseInt(userID));
        return query.executeUpdate();
    }

    @Transactional
    public int setActive(String userID, int i) {
        Query query = entityManager.createQuery("update UserEntity e set e.isactive=:verify where e.id=:id");
        query.setParameter("verify",i).setParameter("id",Integer.parseInt(userID));
        return query.executeUpdate();
    }

    @Transactional
    public int deleteUser(String userID) {
        Query query = entityManager.createQuery("delete from UserEntity e where e.id=:id");
        query.setParameter("id",Integer.parseInt(userID));
        return query.executeUpdate();
    }

    public UserEntity getProfile(String userID) {
        Query query = entityManager.createQuery("select e from UserEntity e where e.id=:id");
        query.setParameter("id",Integer.parseInt(userID));
        List<UserEntity> list = query.getResultList();
        if(list.size()>0)
            return list.get(0);
        return null;
    }
}
