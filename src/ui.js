class UI{
    constructor(){
        //attributes to create a new post:
        this.post_title = document.getElementById('post_title');
        this.post_author = document.getElementById('post_author');
        this.post_body = document.getElementById('post_body');

        //Get DOM of Modal
        this.edit_post_title = document.getElementById('edit_post_title');
        this.edit_post_author = document.getElementById('edit_post_author');
        this.edit_post_body = document.getElementById('edit_post_body');
        this.edit_post_id = document.getElementById('edit_post_id');

        this.post_wrapper = document.getElementById('posts');

        this.add_post_btn = document.getElementById('add_post_btn');

        this.post_container = document.querySelector('.posts-container')
    }

    showPosts(posts){
        //console.log(posts);

        let output = "";
        posts.forEach(post => {
            output += `
                <div class="mb3">
                    <div class="class-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                        <a href="" class="card-link">${post.author}</a>
                        <a href="" class="edit btn btn-primary pull-right mr-3">${}</a>
                        <a href="" class="card-link">${}</a>
                        <a href="" class="delete btn btn-primary pull-right mr-3">${}</a>
                     </div>
                </div>
            `;
        })
    }
}























