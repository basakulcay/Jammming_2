return fetch(`https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`);

return fetch(..., { 
  headers: {
    Authorization: `Bearer ${apiKey}` 
  }
});

return fetch(..., { 
  headers: { ... }
}).then(response => {
  return response.json();
});

 


return fetch(`https://api.spotify.com/v1/users/${userID}/playlists`, {
          method: 'GET',
          headers: headers,
          body: JSON.stringify({ name: name }),


          class App extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                spotifyList: []
              };
              
              this.bringPlaylist=this.bringPlaylist.bind(this);}

            bringPlaylist(){
              Spotify.bringPlaylist().then(spotifyList=>{
                this.setState({spotifyList: spotifyList});
              })
            }
          
            render() {
              return (
                <div>
                    <SpotifyPlaylist onSearch={this.search} spotifyList={this.state.spotifyList} />
                </div>
              );
            }
          }
          