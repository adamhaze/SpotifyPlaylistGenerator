package spg.playlist;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import spg.recommend.RecommendBehavior;
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

//    private static final String host = "http://172.22.1.13:3000";
//    private static final String host = "http://127.0.0.1:3000";
//    private static final String host = "http://10.98.76.100:30008";

    @Autowired
    private PlaylistRepository repository;

//    @CrossOrigin(origins = host)
    @CrossOrigin
    @PostMapping(path="/buildPlaylist", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<Song> buildPlaylist(@RequestBody ArrayList<Song> songs){
        PlaylistBuilder builder = new PlaylistBuilder(songs);
        ArrayList<Song> temp = new ArrayList<>();
        for(Song s : songs)
        { //Create new random RecommendBehavior
            RecommendBehavior behavior;
            int random = (int)(Math.random()*3);
            switch (random) {
                case 0 -> behavior = new RecommendBehavior1();
                case 1 -> behavior = new RecommendBehavior2();
                case 2 -> behavior = new RecommendBehavior3();
                default -> behavior = null;
            }
            temp.addAll(behavior.recommend(s));
        }
        builder.addSongs(temp);

        return builder.getPlaylist().songs;
    }

//    @CrossOrigin(origins = host)
    @CrossOrigin
    @PostMapping(path="/savePlaylist", produces = MediaType.APPLICATION_JSON_VALUE)
    public Boolean savePlaylist(@RequestBody Playlist p) {
        // don't save playlist if one with same name already exists for current user
        if (repository.findByNameAndEmail(p.name,p.email) != null){ return false; }
        repository.save(p);
        return true;
    }

//    @CrossOrigin(origins = host)
    @CrossOrigin
    @PostMapping(path="/getUserPlaylists", produces = MediaType.APPLICATION_JSON_VALUE)
    public List<Playlist> getAllUserPlaylists(@RequestBody User u) {
//        System.out.println(repository.findByEmail(email));
        return repository.findByEmail(u.email);
    }
}
