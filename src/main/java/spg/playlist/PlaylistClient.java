package spg.playlist;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

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
//        if (repository.findFirstByEmail(p.email) != null){ return false; }
        if (repository.findByNameAndEmail(p.name,p.email) != null){ return false; }
        repository.save(p);
        return true;
    }
}
