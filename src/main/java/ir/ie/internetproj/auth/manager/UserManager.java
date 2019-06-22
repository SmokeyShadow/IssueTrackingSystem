package ir.ie.internetproj.auth.manager;

import ir.ie.internetproj.auth.dao.AuthDao;
import ir.ie.internetproj.auth.entities.UserEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import wise.core.datamanagement.ActionResult;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Component("userManager")
public class UserManager {

    @Autowired
    private AuthDao authDao;

     @Transactional
    public ActionResult<String> setUser(UserEntity user) {
        ActionResult<String> result = new ActionResult<>();
        String[] messages = validateUserRegisteration(user.getName(),
                user.getPass(),
                user.getRepass(),
                user.getEmail());
        if(messages.length <= 0){

            UserEntity containUserName = authDao.containsUserAndValid(user.getName());
            UserEntity containUserEmail = authDao.containsUsersEmail(user.getEmail());
            if(containUserName != null || containUserEmail != null)
            {
                result.setMessage("فرد دیگری با این اطلاعات ثبت نام کرده!");
            }
            else{

                    UserEntity caseEntity = new UserEntity(-1,-1 , user.getName(), user.getRole() ,user.getEmail()  , user.getPass()  );
                    UserEntity insertedUser = authDao.insertUser(caseEntity);
                    if(insertedUser != null) {
                        result.setSuccess(true);
                        result.setMessage(" کاربر با موفقیت ثبت شد");
                        result.setData(null);
                    }
                    else
                    {
                        result.setMessage("مشکلی در ثبت در پایگاه داده پیش آمده");
                    }

            }

        }else {
            result.setMessage(String.join("\n", messages));
        }
        return result;
    }
    public ActionResult<UserEntity> login(UserEntity user) {
        ActionResult<UserEntity> result = new ActionResult<>();
        String[] messages = validateUserLogin(user.getEmail(),
                user.getPass());
        if(messages.length <= 0){

            UserEntity loginedUser = authDao.containUser(user.getEmail() , user.getPass());
            if(loginedUser == null )
            {
                result.setMessage("شما ثبت نام نکرده اید!");
            }
            else{

                if(loginedUser != null) {
                    result.setSuccess(true);
                    result.setMessage("کاربر وجود دارد");
                    result.setData(loginedUser);
                }
                else
                {
                    result.setMessage("مشکلی در ثبت در پایگاه داده پیش آمده");
                }

            }

        }else {
            result.setMessage(String.join("\n", messages));
        }
        return result;
    }

    private String[] validateUserLogin(String email, String pass) {
        List<String> messages = new ArrayList<>();

        if(pass == null || pass.length() == 0 ){
            messages.add("رمز عبور نمی تواند خالی باشد!");
        }

        if( pass.length() < 6)
        {
            messages.add("پسورد باید حداقل 6 رقم باشد");
        }

        if(email == null || email.length() == 0 ||  !email.matches("^[a-z]([a-z0-9]|_[a-z0-9]|.[a-z0-9])+@[a-z0-9_]+([.][a-z0-9]+)+$")){
            messages.add("ایمیل خالی یا با فرمت نادرست می باشد!");
        }
        String[] ans = new String[messages.size()];
        for (int i = 0; i <messages.size() ; i++) {
            ans[i] = messages.get(i);
        }
        return ans;
    }

    private String[] validateUserRegisteration(String name,
                                     String pass,
                                     String repass,
                                     String email){
        List<String> messages = new ArrayList<>();
        if(name == null || name.length() == 0){
            messages.add("نام نمی تواند خالی باشد!");
        }
        if(pass == null || pass.length() == 0 ){
            messages.add("رمز عبور نمی تواند خالی باشد!");
        }
        if(repass == null || repass.length() == 0){
            messages.add("تکرار رمز عبور نمی تواند خالی باشد!");
        }
        if(repass.length() < 6 || pass.length() < 6)
        {
            messages.add("پسورد باید حداقل 6 رقم باشد");
        }
        if(!repass.equals(pass)){
            messages.add("رمز عبور باید با تکرار آن یکی باشند!");
        }
        if(email == null || email.length() == 0 ||  !email.matches("^[a-z]([a-z0-9]|_[a-z0-9]|.[a-z0-9])+@[a-z0-9_]+([.][a-z0-9]+)+$")){
            messages.add("ایمیل خالی یا با فرمت نادرست می باشد!");
        }
        String[] ans = new String[messages.size()];
        for (int i = 0; i <messages.size() ; i++) {
            ans[i] = messages.get(i);
        }
        return ans;
    }


    public ActionResult<String> changePassword(String prevPass, String newpass, String renewpass , String  username) {
        ActionResult<String> result = new ActionResult<>();
        String[] messages = validateChangePassword(prevPass,
                newpass,
                renewpass);
        if(messages.length <= 0){

            UserEntity correctPass = authDao.validatePrevPass(prevPass ,username);
            if(correctPass == null)
            {
                result.setMessage("رمز عبور قبلی را اشتباه وارد کرده اید!");
            }
            else{
                boolean changed = authDao.changePassword(newpass , correctPass);
                if(changed) {
                    result.setSuccess(true);
                    result.setMessage("رمز عبور با موفقیت تغییر کرد");
                    result.setData(null);
                }
                else
                {
                    result.setMessage("مشکلی در ثبت در پایگاه داده پیش آمده");
                }

            }

        }else {
            result.setMessage(String.join("\n", messages));
        }
        return result;
    }

    private String[] validateChangePassword(String prevPass, String newpass, String renewpass) {
        List<String> messages = new ArrayList<>();
        if(prevPass == null || prevPass.length() == 0 ){
            messages.add("رمز عبور قبلی نمی تواند خالی باشد!");
        }
        if(newpass == null || newpass.length() == 0 ){
            messages.add("رمز عبور نمی تواند خالی باشد!");
        }
        if(renewpass == null || renewpass.length() == 0){
            messages.add("تکرار رمز عبور نمی تواند خالی باشد!");
        }
        if(renewpass.length() < 6 || newpass.length() < 6 || prevPass.length() < 6)
        {
            messages.add("پسورد باید حداقل 6 رقم باشد");
        }
        if(!newpass.equals(renewpass)){
            messages.add("رمز عبور باید با تکرار آن یکی باشند!");
        }
        String[] ans = new String[messages.size()];
        for (int i = 0; i <messages.size() ; i++) {
            ans[i] = messages.get(i);
        }
        return ans;
    }
}
