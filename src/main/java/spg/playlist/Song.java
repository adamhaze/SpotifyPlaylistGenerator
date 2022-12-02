package spg.playlist;

import org.springframework.data.annotation.Id;

public class Song {

    @Id
    public String id;
    public String name;
    public String artist;

    public Song() {}

    public Song(String name, String artist, String id){
        this.name = name;
        this.artist = artist;
        this.id = id;
    }
}
