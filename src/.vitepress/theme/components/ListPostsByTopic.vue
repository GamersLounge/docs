<template>
    <div>
        <p v-if="posts.length === 0">No posts in this topic.</p>

        <article v-for="(post, index) in posts" :key="index">
            <h2><a :href="post.url">{{ post.name }}</a></h2>
            <time>{{ post.date }}</time>
            <p>{{ post.excerpt }}</p>
        </article>

    </div>
</template>

<script setup>

import { useRouter } from "vitepress";
import { ref } from "vue";

const router = useRouter();
const currentTopic = router.route.data.title.toLowerCase();
const rawData = await getPosts();
const posts = ref([]);

parsePostData();

function parsePostData() {

    // Convert loaded modules to printable objects
    rawData.forEach((item) => {

        console.log(item)

        const topics = item.__pageData.frontmatter.topics.split(",").map(topic => topic.trim());

        if (topics.indexOf(currentTopic) === -1) return;

        posts.value.push({
            name: item.__pageData.frontmatter.title || "No title",
            url: adjustUrl(item.default.name),
            date: prettyDate(new Date(item.__pageData.frontmatter.date || new Date(1970, 0, 1))),
            excerpt: item.__pageData.frontmatter.excerpt || "",
        });
    });

    posts.value.sort((a, b) => {
        if (a.date > b.date) {
            return -1;
        } else if (b.date > a.date) {
            return 1;
        }
        return 0;
    });
}

function adjustUrl(url) {
    return url.replace("blog/", `${import.meta.env.BASE_URL}blog/`).replace(".md", "");
}

async function getPosts() {

    // Load all posts from "blog" folder, ignore "index.md"
    const posts = import.meta.glob(["!../../blog/index.md", "../../../docs/pages/*.md"]);
    const promises = [];

    for (const path in posts) {
        promises.push(posts[path]());
    }

    return Promise.all(promises);
}

// TODO: Refactor to util class
function getMonthName(num) {
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

// TODO: Refactor to util class
function prettyDate(date) {
    return `${getMonthName(date.getMonth())} ${String(date.getDate()).padStart(2, "0")}, ${date.getFullYear()}`;
}

</script>
