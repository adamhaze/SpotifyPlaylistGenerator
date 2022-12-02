package spg.playlist;


import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class PlaylistClient {


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path="/buildPlaylist", produces = MediaType.APPLICATION_JSON_VALUE)
    public ArrayList<String> buildPlaylist(@RequestBody ArrayList<Song> songs){
        PlaylistBuilder builder = new PlaylistBuilder(songs);



        ArrayList<String> ret = new ArrayList<>();
        for (Song song : songs) {
            ret.add(song.name);
        }
        return ret;
    }
}
