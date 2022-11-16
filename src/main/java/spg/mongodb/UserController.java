package spg.mongodb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/users")
    public User saveUserToDB(@Validated @RequestBody User user) {
        System.out.println(user);
        repository.deleteAll();
        return repository.save(user);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/login", produces = MediaType.APPLICATION_JSON_VALUE)
    public Boolean checkLoginCredentials(@RequestBody User user) {
        User u = repository.findByUsernameAndPassword(user.username, user.password);
        return u != null;
    }

}


