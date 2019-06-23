package ir.ie.internetproj.auth.entities;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class UserEntity {
    @Id
    @Column(name = "iduser")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int id;


    @Column(name = "verified")
    private int verified;

    @Column(name = "isactive")
    private int isactive;


    @Column(name = "name")

    private String name;

    @Column(name = "role")
    private String role;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String pass;

    @Transient
    private String repass;

    public UserEntity()
    {}

    public UserEntity(String name,  String email, String pass, String repass ,String role) {
        this.name = name;
        this.role = role;
        this.email = email;
        this.pass = pass;
        this.repass = repass;
    }

    public UserEntity(int verified, int isactive, String name, String role, String email, String pass) {
        this.verified = verified;
        this.isactive = isactive;
        this.name = name;
        this.role = role;
        this.email = email;
        this.pass = pass;
    }

    public String getRepass() {
        return repass;
    }

    public void setRepass(String repass) {
        this.repass = repass;
    }
    public int getVerified() {
        return verified;
    }

    public void setVerified(int verified) {
        this.verified = verified;
    }

    public int getIsactive() {
        return isactive;
    }

    public void setIsactive(int usactive) {
        this.isactive = usactive;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }
}
