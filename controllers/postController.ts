import Post from '../models/posts';

//Traer todos los post
export function getAllPosts(req, res, next) {
    Post.find((err, posts) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({posts});
    });
}

//Traer un solo post por su ID

export function getPostById(req, res, next) {
    const id = req.params.id;  
  
    Post.findById(id, (err, post) => {
      if(err) {
          res.status(500).json({err});
      }
      res.status(200).json({post});
    });
  }

  //Crear post

  export function createPost(req, res, next) {
    const title = req.body.title;
    const content = req.body.content;

    console.log(req.body);
    if(!title) {
        res.status(422).json({err: 'Title is required.'});
        return;
    } 
    if(!content) {
        res.status(422).json({err: 'Content is required.'});
        return;
    }

    const post = new Post({
        title,
        content
    });

    post.save((err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });
}

//Actualizar post por ID
export function updatePost (req, res, next) {
    const id = req.params.id;

    Post.findByIdAndUpdate(id, req.body, (err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });
}
//Borrar post por ID
export function deletePost(req, res, next) {
    const id = req.params.id;

    Post.findByIdAndRemove(id, (err, post) => {
        if(err) {
            res.status(500).json({err});
        }
        res.status(200).json({post});
    });

}