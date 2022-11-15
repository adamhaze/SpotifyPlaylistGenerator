package spg.mongodb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path="/users",  produces = "text/plain;charset=UTF-8")
    public String saveUserToDB() {
        repository.deleteAll();
        repository.save(new User("Adam", "adamhaze", "mypassword", "adamhayes1515@gmail.com"));

        return "this is a test";
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public Boolean checkLoginCredentials(@RequestBody User user) {
        User u = repository.findByUsernameAndPassword(user.username, user.password);
        return u != null;
    }

}


