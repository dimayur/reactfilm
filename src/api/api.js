import axios from 'axios';

function Api() {
    const apiKey = 'fe32ee99813ae89923f6239a74918769';
    const movieId = '57041-gin-tama';

    axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=uk-UA`)
        .then(response => {
            // Обробка отриманої відповіді
            const videos = response.data.results;
            // Знайдіть трейлер, який ви шукаєте (наприклад, за мовою)
            const ukrainianTrailer = videos.find(video => video.iso_639_1 === 'uk');
            // Використовуйте український трейлер за потреби
            console.log(ukrainianTrailer);
        })
        .catch(error => {
            // Обробка помилки
            console.error(error);
        });
    return(
      <div className="Api">

      </div>
    );
}
export default Api;