package spg.mongodb;

import org.springframework.beans.factory.annotation.Autowired;
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

}


