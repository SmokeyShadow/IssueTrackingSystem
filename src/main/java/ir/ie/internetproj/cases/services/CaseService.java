package ir.ie.internetproj.cases.services;
import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.cases.entities.CaseEntity;

import org.thymeleaf.expression.Arrays;
import wise.core.datamanagement.ActionResult;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.io.InputStream;
import java.util.List;

@Path("case")
public interface CaseService {

    @Path("/submit")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @POST
    public ActionResult<String> addCase(
                                         @FormParam("assigner") String assigner,
                                        @FormParam("date") String date,
                                        @FormParam("assignee") String to,
                                        @FormParam("status") String importance,
                                        @FormParam("subject") String subject,
                                        @FormParam("description") String body,
                                        @FormParam("token") String token,
                                        @FormParam("status") String status,
                                        @FormParam("rate") String rate ,
                                        @FormParam("attachment")String attachment) throws IOException;

    @Path("/insertedCaseReport")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @POST
    public ActionResult<List<CaseEntity>> getCasesCountBySubjects(@FormParam("subject") String subject
    ) throws IOException;

    @Path("/assignees")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<List<CaseEntity>> getAssignees(UserEntity user
           ) throws IOException;

    @Path("/casestatus")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<List<CaseEntity>> getCasesStatus(UserEntity user
    ) throws IOException;

    @Path("/allcases")
    @Produces(MediaType.APPLICATION_JSON)
    @GET
    public ActionResult<List<CaseEntity>> getAllCases(
    ) throws IOException;

    @Path("/rate")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<String> rateCase(CaseEntity entity
    ) throws IOException;

    @Path("/assigneelist")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<List<UserEntity>> getAssigneeList(UserEntity entity
    ) throws IOException;

    @Path("/docase")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<String> updateCase(CaseEntity entity
    ) throws IOException;


}
