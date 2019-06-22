package ir.ie.internetproj.cases.services;
import ir.ie.internetproj.cases.entities.CaseEntity;

import wise.core.datamanagement.ActionResult;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;
import java.io.InputStream;

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


    @Path("/s")
    @Produces(MediaType.APPLICATION_JSON)
    @POST
    public ActionResult<String> addtest(@FormParam("assigner") String assigner) throws IOException;


}
