package ir.ie.internetproj.cases.services;
import ir.ie.internetproj.auth.entities.UserEntity;
import ir.ie.internetproj.cases.entities.CaseEntity;

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

    @Path("/rate")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<String> rateCase(CaseEntity entity
    ) throws IOException;


}
