<template>
  <div>
    <article v-for="(post, index) in posts" :key="index">
      <h2><a :href="post.url">{{ post.name }}</a></h2>
      <time>{{ prettyDate(post.date) }}</time>
      <p>{{ post.excerpt }}</p>
    </article>
  </div>
</template>

<script>

export default {
  name: "ListPosts",

  data() {
    return {
      rawPosts: null,
      posts: [],
      hostName: import.meta.env.BASE_URL,
    }
  },

  methods: {

    async init() {
      // Load all markdown files
      this.rawPosts = await this.getPosts();
      // Convert loaded modules to printable objects
      this.rawPosts.forEach((item) => {
        this.posts.push({
          name: item.__pageData.frontmatter.title || "No title",
          url: this.adjustUrl(item.default.name),
          date: new Date(item.__pageData.frontmatter.date || new Date(1970, 0, 1)),
          excerpt: item.__pageData.frontmatter.excerpt || "",
        });
      });
      this.posts.sort((a, b) => {
        if (a.date > b.date) {
          return -1;
        } else if (b.date > a.date) {
          return 1;
        }
        return 0;
      });
      if (this.posts.length > 10) {
        // Cap recent posts at 10
        this.posts.length = 10;
      }
    },

    async getPosts() {
      // Load all posts from "blog" folder, ignore "index.md"
      const posts = import.meta.glob(["!../../blog/index.md", "../../docs/pages/*.md"]);
      const promises = [];
      for (const path in posts) {
        promises.push(posts[path]());
      }
      return Promise.all(promises);
    },

    prettyDate(date) {
      return `${this.month(date.getMonth())} ${String(date.getDate()).padStart(2, "0")}, ${date.getFullYear()}`;
    },

    adjustUrl(url) {
      return url.replace("blog/", `${this.hostName}blog/`).replace(".md", "");
    },

    month(num) {
      switch (num) {
        case 0:
          return "Jan";
        case 1:
          return "Feb";
        case 2:
          return "Mar";
        case 3:
          return "Apr";
        case 4:
          return "May";
        case 5:
          return "Jun";
        case 6:
          return "Jul";
        case 7:
          return "Aug";
        case 8:
          return "Sep";
        case 9:
          return "Oct";
        case 10:
          return "Nov";
        case 11:
          return "Dec";
        default:
          return "Unknown";
      }
    }
  },

  mounted() {
    this.init();
  },
};

</script>
