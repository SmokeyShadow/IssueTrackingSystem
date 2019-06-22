package wise.core.datamanagement;

public class ActionResult<T> {
	private boolean success;
	private String message;
	private T data;
	
	public ActionResult() {
		
	}

	public ActionResult(String message){
		this(true, message, null);
	}
	public ActionResult(String message, T data){
		this(true, message, data);
	}
	public ActionResult(boolean success, String message, T data) {
		this.success = success;
		this.message = message;
		this.data = data;
	}
	public boolean isSuccess() {
		return success;
	}
	public void setSuccess(boolean success) {
		this.success = success;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public T getData() {
		return data;
	}

	public void setData(T data) {
		this.data = data;
	}

}
