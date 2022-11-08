package spg.mongodb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

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

}


