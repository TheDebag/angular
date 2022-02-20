import { Component } from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Первый пост', text: 'Первые текст поста', id: 1 },
    { title: 'Второй заголовок', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, odit voluptate doloremque eius molestiae incidunt possimus, ex cumque esse, quidem voluptatem facere! Inventore adipisci vitae dolor autem. Est, numquam recusandae!', id: 2 }
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
    // console.log('Post', post)
  }
}
