package spg.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

// Pattern: Model View Controller (MVC)
// Element: CONTROLLER
// handles change-of-state operations between the frontend and the model (MongoDB)

@RestController
public class UserController {

//    private static final String host = "http://172.22.1.13:3000";
//    private static final String host = "http://127.0.0.1:3000";
//    private static final String host = "http://10.98.76.100:30008";

    @Autowired
    private UserRepository repository;

//    @CrossOrigin(origins = host)
    @CrossOrigin
    @PostMapping(path="/users")
    public ResponseEntity<String> saveUserToDB(@Validated @RequestBody User user) {
        System.out.println(user);
        //repository.deleteAll();
        if(repository.findFirstByEmail(user.email) != null) {
            return new ResponseEntity<>("User already exists in database", HttpStatus.FORBIDDEN);
        }else{
            repository.save(user);
            return new ResponseEntity<>("Success", HttpStatus.CREATED);
        }
    }

//    @CrossOrigin(origins = host)
    @CrossOrigin
    @PostMapping(path="/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public Boolean checkLoginCredentials(@RequestBody User user) {
        User u = repository.findByUsernameAndPassword(user.username, user.password);
        return u != null;
    }

//    @CrossOrigin(origins = host)
    @CrossOrigin
    @PostMapping(path="/getEmail", produces = MediaType.APPLICATION_JSON_VALUE)
    public String getUserEmail(@RequestBody User user) {
        User u = repository.findByUsernameAndPassword(user.username, user.password);
        return u.email;
    }

}


