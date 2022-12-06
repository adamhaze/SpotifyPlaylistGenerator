package spg.playlist;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import spg.user.User;
import spg.spotifyAPI.SpotifyCalls;
import spg.recommend.RecommendBehavior1;
import spg.recommend.RecommendBehavior2;
import spg.recommend.RecommendBehavior3;

import java.util.ArrayList;
import java.util.List;

// Pattern: Model View Controller (MVC)
// Element: CONTROLLER
// handles change-of-state operations between the frontend and the model (MongoDB)


@RestController
public class PlaylistClient {

    @Autowired
    private PlaylistRepository repository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/buildPlaylist", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<Song> buildPlaylist(@RequestBody ArrayList<Song> songs){
        PlaylistBuilder builder = new PlaylistBuilder(songs);
        builder.addSongs(new RecommendBehavior1());
        builder.addSongs(new RecommendBehavior2());
        builder.addSongs(new RecommendBehavior3());

        SpotifyCalls.getTrack_Sync(songs.get(0).id);

        return builder.getPlaylist().songs;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/savePlaylist", produces = MediaType.APPLICATION_JSON_VALUE)
    public Boolean savePlaylist(@RequestBody Playlist p) {
        // don't save playlist if one with same name already exists for current user
        if (repository.findByNameAndEmail(p.name,p.email) != null){ return false; }
        repository.save(p);
        return true;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/getUserPlaylists", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Playlist> getAllUserPlaylists(@RequestBody User u) {
//        System.out.println(repository.findByEmail(email));
        return repository.findByEmail(u.email);
    }
}
