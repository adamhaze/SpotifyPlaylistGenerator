package spg.playlist;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import spg.user.User;

import java.util.ArrayList;
import java.util.List;

@RestController
public class PlaylistClient {

    @Autowired
    private PlaylistRepository repository;

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/buildPlaylist", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<Song> buildPlaylist(@RequestBody ArrayList<Song> songs){
        PlaylistBuilder builder = new PlaylistBuilder(songs);


        return builder.getPlaylist().songs;
//        ArrayList<String> ret = new ArrayList<>();
//        for (Song song : songs) {
//            ret.add(song.name);
//        }
//        return ret;
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
