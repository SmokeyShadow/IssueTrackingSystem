package ir.ie.internetproj.doCase.services;

import wise.core.datamanagement.ActionResult;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.io.IOException;

@Path("docase")
public interface DoCaseService {
    @Path("/submit")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @POST
    public ActionResult<String> addDoCase(
            @FormParam("status") String status,
            @FormParam("assignee") String assignee,
            @FormParam("status") String text) throws IOException;



}
