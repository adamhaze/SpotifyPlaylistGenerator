package spg.user;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

// Pattern: Model View Controller (MVC)
// Element: MODEL
// represents a User entry in the database

@Document(collection = "users")
public class User {

    @Id
    public String id;

    public String name;
    public String username;
    public String password;
    public String email;

    public User() {}

    public User(String name, String username, String password, String email){

        this.name = name;
        this.username = username;
        this.password = password;
        this.email = email;
    }

    @Override
    public String toString() {
        return String.format("User[id=%s, name='%s', username='%s', password='%s', email='%s']",
                id, name, username, password, email);
    }


}