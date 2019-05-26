package ir.ie.internetproj.entities;
import javax.persistence.*;
@Entity
@Table(name = "case")
public class CaseEntity {

    @Id
    @Column(name = "idcase")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private  int id;

    @Column(name = "assigner")
    private String assigner;

    @Column(name = "date")
    private String date;

    @Column(name = "subject")
    private String subject;

    @Column(name = "description")

    private String description;

    @Column(name = "attachment")
    private String attachment;

    @Column(name = "assignee")
    private String assignee;

    @Column(name = "status")
    private String status;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAssigner() {
        return assigner;
    }

    public void setAssigner(String assigner) {
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

    public String getAssignee() {
        return assignee;
    }

    public void setAssignee(String assignee) {
        this.assignee = assignee;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


}
