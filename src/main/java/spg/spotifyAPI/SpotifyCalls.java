package spg.spotifyAPI;

import org.apache.hc.core5.http.ParseException;
import se.michaelthelin.spotify.SpotifyApi;
import se.michaelthelin.spotify.exceptions.SpotifyWebApiException;
import se.michaelthelin.spotify.model_objects.credentials.ClientCredentials;
import se.michaelthelin.spotify.model_objects.specification.Track;
import se.michaelthelin.spotify.model_objects.specification.TrackSimplified;
import se.michaelthelin.spotify.requests.authorization.client_credentials.ClientCredentialsRequest;
import se.michaelthelin.spotify.requests.data.browse.GetRecommendationsRequest;
import se.michaelthelin.spotify.requests.data.tracks.GetTrackRequest;

import java.io.IOException;
import java.util.ArrayList;


//MOST OF THE CODE CAME FROM EXAMPLES GIVEN ON THE GITHUB PAGE
//https://github.com/spotify-web-api-java/spotify-web-api-java
public class SpotifyCalls {
    private static final String clientId = "1818069e79754a598ba2c587d43d0ec5";
    private static final String clientSecret = "bf98b89f33c34c0880520a34bded89ac";

    private static final SpotifyApi spotifyApi = new SpotifyApi.Builder()
            .setClientId(clientId)
            .setClientSecret(clientSecret)
            .build();
    private static final ClientCredentialsRequest clientCredentialsRequest = spotifyApi.clientCredentials()
            .build();

    public static void clientCredentials_Sync() {
        try {
            final ClientCredentials clientCredentials = clientCredentialsRequest.execute();

            // Set access token for further "spotifyApi" object usage
            spotifyApi.setAccessToken(clientCredentials.getAccessToken());

            System.out.println("Expires in: " + clientCredentials.getExpiresIn());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static void getTrack_Sync(String trackId) {
        try {
            //set credentials
            clientCredentials_Sync();
            //create request
            final GetTrackRequest getTrackRequest = spotifyApi.getTrack(trackId).build();
            //execute request
            final Track track = getTrackRequest.execute();

            System.out.println("Name: " + track.getName());
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static TrackSimplified[] getRecommendedTrack_Sync(String trackId, String artistId){
        try {
            //set credentials
            clientCredentials_Sync();
            //create request
            final GetRecommendationsRequest getRecommendationsRequest = spotifyApi.getRecommendations()
                    .seed_tracks(trackId)
                    .seed_artists(artistId)
                    .limit(5)
                    .build();
            return getRecommendationsRequest.execute().getTracks();
//            final TrackSimplified tracks[] = getRecommendationsRequest.execute().getTracks();

        } catch(IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
            return null;
        }
    }
}
