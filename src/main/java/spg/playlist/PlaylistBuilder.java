package spg.playlist;

import java.util.ArrayList;

public class PlaylistBuilder {

    Playlist playlist;
    ArrayList<Song> querySongs;

    public PlaylistBuilder(ArrayList<Song> songs){
        this.querySongs = songs;
    }

    public void addSong(){
        // for each song randomly choose an algo 5 times to add 5 songs to playlist
    }

    public Playlist getPlaylist(){
        return this.playlist;
    }
}
