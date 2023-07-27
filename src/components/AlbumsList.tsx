
type AlbumsListProps = {
    user: {[key:string]: string}
}
function AlbumsList({ user }:AlbumsListProps) {
    return <div>Albums for {user.name}</div>;
  }
  
  export default AlbumsList;
  