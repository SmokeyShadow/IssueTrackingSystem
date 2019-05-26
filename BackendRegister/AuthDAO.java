package ir.asta.training.contacts.dao;

import ir.asta.training.contacts.entities.UserEntity;

import javax.inject.Named;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

@Named("authDAO")
public class AuthDAO {
    @PersistenceContext
    private EntityManager entityManager;
    public UserEntity register(String username, String password, String email, String role, String token){
        UserEntity entity = new UserEntity();
        entity.setUsername(username);
        entity.setPassword(password);
        entity.setEmail(email);
        entity.setRole(role);
        entity.setToken(token);
        entityManager.persist(entity);
        return entity;
    }

    public boolean containsUser(String username){
        Query query = entityManager.createQuery("select e from UserEntity e where username=:username");
        query.setParameter("username", username);
        List list = query.getResultList();
        return list.size() > 0;
    }

}
