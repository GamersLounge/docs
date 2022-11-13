import fs from "node:fs";
import path from "node:path";

export default {
    "/docs/work/": [
        {
            text: "Working Environment",
            collapsible: true,
            items: loadItems([
                "/work/introduction",
                "/work/work-environment",
                "/work/work-guidelines",
                "/work/code-guidelines"
            ])
        },
        {
            text: "Our Projects",
            collapsible: true,
            items: loadItems([
                "/work/league",
                "/work/valorant",
                "/work/pubg",
                "/work/misc"
            ])
        }
    ],
    "/docs/resources/": [
        {
            text: "Applications",
            collapsible: true,
            items: loadItems([
                "/resources/apps",
            ])
        },
        {
            text: "Websites",
            collapsible: true,
            items: loadItems([
                "/resources/general",
                "/resources/design",
            ])
        }
    ]
}

function extractTitle(filePath) {

    // const content = fs.readFileSync(path.resolve(filePath), "utf-8");
    // const { data } = matter(content);
    //
    // if (data.title) return data.title;

    return fs.readFileSync(filePath, "utf8").split("\n")[0].replace(/^#\s+/, "");
}

/**
 * Load all items from directory.
 *
 * @param dir directory from `src` child. e.g. /learn/leetcode
 */
function loadAllItems(dir) {

    const realDir = path.join("./src", dir);

    return fs.readdirSync(realDir)
        .filter(f => f.endsWith('.md'))
        .sort((a, b) => parseInt(a) - parseInt(b))
        .map(f => {
            const text = extractTitle(path.join(realDir, f))
            const link = path.join(dir, path.basename(f, '.md'))
            return { text, link }
        })
}

function loadItems(arr) {

    return arr.map(link => {

        const mLink = `/docs${link}`;
        const text = extractTitle(path.join("./src", `${mLink}.md`));
        return { text, link: mLink }
    })
}
