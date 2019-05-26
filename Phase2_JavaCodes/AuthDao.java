package ir.asta.training.contacts.dao;
import ir.asta.training.contacts.entities.UserEntity;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Named("authDAO")
public class AuthDao {
    @PersistenceContext
    private EntityManager entityManager;
    public UserEntity register(String email,String username, String password, String role,String token){
        UserEntity entity = new UserEntity();
        entity.setEmail(email);
        entity.setName(username);
        entity.setPassword(password);
        entity.setRole(role);
        entity.setToken(token);
        entityManager.persist(entity);
        return entity;
    }

    public boolean containsUser(String email){
        Query query = entityManager.createQuery("select e from users e where email=:email");
        query.setParameter("email", email);
        List list = query.getResultList();
        return list.size() > 0;
    }

    public UserEntity checkUsernameAndPassword(String email, String password){
        Query query = entityManager.createQuery("select e from users e where email=:email and pass=:pass");
        query.setParameter("email", email).setParameter("password", password);
        List<UserEntity> list = query.getResultList();
        if (list.size() > 0){
            return list.get(0);
        }
        return null;
    }

}

