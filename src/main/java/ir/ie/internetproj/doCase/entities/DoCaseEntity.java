package ir.ie.internetproj.doCase.entities;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.sun.javafx.beans.IDProperty;

import javax.persistence.*;

@Entity
@Table(name = "docase")
public class DoCaseEntity {
    @Id
    @Column (name = "iddocase")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int id;

    @Column(name = "status")
    private String status;

    @Column(name = "assignee")
    private int assignee;

    @Column (name = "text")
    private String text;

    @Transient
    @JsonSerialize
    @JsonDeserialize
    private String assigneeName;

    public DoCaseEntity(String status, int assignee, String text) {
        this.status = status;
        this.assignee = assignee;
        this.text = text;
    }

    public DoCaseEntity(){};

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public int getAssignee() {
        return assignee;
    }

    public void setAssignee(int assignee) {
        this.assignee = assignee;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public String getAssigneeName() {
        return assigneeName;
    }

    public void setAssigneeName(String assigneeName) {
        this.assigneeName = assigneeName;
    }
}
