/*jshint esversion: 6 */
const baseUrl = 'https://boiling-cliffs-55576.herokuapp.com';
function PostService($http){
  const postUrl = `${baseUrl}/posts`;
  return {
    get: get,
    getOne: getOne,
    create: create,
    update: update,
    delete: deleteOne
  };

  function get(){
    return $http.get(postUrl)
                .then(response => response.data.posts);
  }

  function getOne(postId){
    return $http.get(`${postUrl}/${postId}`)
                .then(response => response.data.posts[0]);
  }

  function create(post){
    return $http.post(postUrl, post);
  }

  function update(postId, postUpdates){
    return $http.put(`${postUrl}/${postId}`, postUpdates);
  }

  function deleteOne(postId){
    return $http.delete(`${postUrl}/${postId}`);
  }
}

PostService.$inject = ['$http'];


module.exports = PostService;
