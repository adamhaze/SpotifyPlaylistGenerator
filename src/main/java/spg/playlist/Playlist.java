package spg.playlist;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document(collection = "playlist")
public class Playlist {

    @Id
    public String id;

    public ArrayList<Song> songs;
    public String email;
    public String name;

    public Playlist() {};


    public Playlist(ArrayList<Song> songs, String email, String name){

        this.songs = songs;
        this.email = email;
        this.name = name;
    }

//    public void setEmail(String email) {
//        this.email = email;
//    }
//    public void setName(String name) {
//        this.name = name;
//    }
}
