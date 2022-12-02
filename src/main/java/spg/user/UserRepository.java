package spg.user;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

    User findFirstByEmail(String email);

    User findByUsernameAndPassword(String username, String password);

}
