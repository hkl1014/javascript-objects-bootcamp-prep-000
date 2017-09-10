var playlist = {}

function updatePlaylist(playlist, name, song){
  return Object.assign({},playlist,{[name]:song})
}
