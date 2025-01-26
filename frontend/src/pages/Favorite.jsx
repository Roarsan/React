import '../css/Favorite.css';

function Favorite() {
    return (
        <div className="favorites">
            <div className="favorites-empty">
                <h2>No Favorites Yet</h2>
                <p>You haven't added any movies to your favorites. Start exploring and add some!</p>
            </div>
        </div>
    );
}

export default Favorite;
