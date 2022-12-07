package spg.user;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;


// Pattern: Façade
// UserController is shielded from the database collections and functionality
// by UserRepository

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findFirstByEmail(String email);

    User findByUsernameAndPassword(String username, String password);

}
