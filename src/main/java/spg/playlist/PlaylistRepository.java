package spg.playlist;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlaylistRepository extends MongoRepository<Playlist, String> {
    Playlist findByNameAndEmail(String name, String email);
}
