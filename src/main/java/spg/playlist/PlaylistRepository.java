package spg.playlist;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

// Pattern: Façade
// PlaylistClient is shielded from the database collections and functionality
// by PlaylistRepository

@Repository
public interface PlaylistRepository extends MongoRepository<Playlist, String> {
    Playlist findByNameAndEmail(String name, String email);

    @Query("{ 'email' : ?0 }")
    List<Playlist> findByEmail(String email);
}
