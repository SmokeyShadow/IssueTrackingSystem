package ir.ie.internetproj.cases.entities;
import javax.persistence.*;
@Entity
@Table(name = "usercase")
public class CaseEntity {

    @Id
    @Column(name = "idcase")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int id;

    @Column(name = "assigner")
    private int assigner;

    @Column(name = "date")
    private String date;

    @Column(name = "subject")
    private String subject;

    @Column(name = "description")

    private String description;

    @Column(name = "attachment")
    private String attachment;

    @Column(name = "assignee")
    private int assignee;

    @Column(name = "status")
    private String status;

    @Column(name = "rate")
    private String rate;


    @Column(name = "importance")
    private String importance;

    public CaseEntity(){};
    public CaseEntity(String subject ,
                      int assignee ,
                      int assigner ,
                      String date ,
                      String description ,
                      String attachment,
                      String status,
                      String importance,
                      String rate) {
        this.assigner = assigner;
        this.date = date;
        this.subject = subject;
        this.description = description;
        this.attachment = attachment;
        this.assignee = assignee;
        this.status = status;
        this.rate = rate;
        this.importance = importance;
    }

    public String getRate() {
        return rate;
    }

    public void setRate(String rate) {
        this.rate = rate;
    }
    public String getImportance() {
        return importance;
    }

    public void setImportance(String importance) {
        this.importance = importance;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getAssigner() {
        return assigner;
    }

    public void setAssigner(int assigner) {
        this.assigner = assigner;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAttachment() {
        return attachment;
    }

    public void setAttachment(String attachment) {
        this.attachment = attachment;
    }

    public int getAssignee() {
        return assignee;
    }

    public void setAssignee(int assignee) {
        this.assignee = assignee;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
