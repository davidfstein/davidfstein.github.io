const URL = 'https://davidfstein-site-backend.herokuapp.com/api/post';

class PostServiceClient {

    getPosts() {
        return fetch(URL)
            .then((response) => {
                return response.json();
            })
    }
}

export default PostServiceClient;