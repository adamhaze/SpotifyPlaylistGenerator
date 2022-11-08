package spg.mongodb;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository repository;

    @GetMapping("/users")
    public void saveUserToDB() {
        // repository.deleteAll();
        repository.save(new User("Adam", "adamhaze", "mypassword", "adamhayes1515@gmail.com"));
    }

}


