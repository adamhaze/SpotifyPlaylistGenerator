package spg.playlist;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface PlaylistRepository extends MongoRepository<Playlist, String> {
    Playlist findByNameAndEmail(String name, String email);

    @Query("{ 'email' : ?0 }")
    List<Playlist> findByEmail(String email);
}
