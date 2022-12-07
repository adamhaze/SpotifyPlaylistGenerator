package spg.playlist;

import spg.recommend.RecommendBehavior;

import java.lang.reflect.RecordComponent;
import java.util.ArrayList;

// Pattern: Builder
// Element: Builder
// builds a single instance of Playlist in stages

public class PlaylistBuilder {

    Playlist playlist;

    public PlaylistBuilder(ArrayList<Song> songs){


        this.playlist = new Playlist(songs, "", "");
    }

    public void addSongs(ArrayList<Song> songsToAdd){
        playlist.songs.addAll(songsToAdd);

    }


    public Playlist getPlaylist(){
        return this.playlist;
    }
}
