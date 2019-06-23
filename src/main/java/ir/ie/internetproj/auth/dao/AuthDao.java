package ir.ie.internetproj.auth.dao;
import ir.ie.internetproj.auth.entities.UserEntity;
import org.springframework.stereotype.Component;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Component("authDao")
public class AuthDao {

    @PersistenceContext
    private EntityManager manager;


    public UserEntity containsUserAndValid(String assignername) {
        Query query = manager.createQuery("select e from UserEntity e where e.name=:name");
        List<UserEntity> list = query.setParameter("name", assignername).getResultList();
        if (list.size() > 0){
            UserEntity entity = list.get(0);
                return entity;

        }
        return null;
    }
    public UserEntity containsUserAndValid(String newuser, String newemail) {
        Query query = manager.createQuery("select e from UserEntity e where e.name=:name or e.email=:email");
        List<UserEntity> list = query.setParameter("name", newuser).setParameter("email" , newemail).getResultList();
        if (list.size() > 0){
            UserEntity entity = list.get(0);
            return entity;

        }
        return null;
    }
    public UserEntity getByToken(String token){
        Query query = manager.createQuery("select e from UserEntity e where e.mongoId=:token")
                .setParameter("token", token);
        List<UserEntity> list = query.getResultList();
        if (list.size() > 0){
            return list.get(0);
        }
        return null;
    }

    public UserEntity insertUser(UserEntity caseEntity) {
        manager.persist(caseEntity);
        return caseEntity;
    }

    public UserEntity containsUsersEmail(String email) {
        Query query = manager.createQuery("select e from UserEntity e where e.email=:email");
        List<UserEntity> list = query.setParameter("email", email).getResultList();
        if (list.size() > 0){
            UserEntity entity = list.get(0);
            return entity;

        }
        return null;
    }

    public UserEntity containUser(String email, String pass) {
        Query query = manager.createQuery("select e from UserEntity e where e.email=:email and e.pass=:password");
        List<UserEntity> list = query.setParameter("email", email).setParameter("password" , pass).getResultList();
        if (list.size() > 0){
            UserEntity entity = list.get(0);
            return entity;

        }
        return null;
    }

    public UserEntity validatePrevPass(String prevPass , String username) {
        Query query = manager.createQuery("select e from UserEntity e where  e.name =:name and e.pass=:password");
        List<UserEntity> list = query.setParameter("name", username).setParameter("password" , prevPass).getResultList();
        if (list.size() > 0){
            UserEntity entity = list.get(0);
            return entity;

        }
        return null;
    }

    public boolean changePassword(String newpass , UserEntity entity) {
        entity.setPass(newpass);
        UserEntity en = manager.merge(entity);
        if(en != null)
            return true;

        return false;

    }


    public UserEntity updateProfile(String newuser, String newemail, UserEntity containUser) {
        containUser.setEmail(newemail);
        containUser.setName(newuser);
        UserEntity en = manager.merge(containUser);
        return  en;
    }
}
