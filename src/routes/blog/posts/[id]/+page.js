import blogAsJSON from '$lib/components/blog/blog.json'
let entryById;
/** @type {import('./[id]').PageLoad} */
export async function load({params}) {
    let id = params.id;
    const post = blogAsJSON;
    post.forEach(entry => {
        if(entry.id == id){
            entryById = entry;
        }
    });
    if(entryById == null){
        entryById = {
            id: null,
            topic: "ERROR",
            description: "Error - Your searched post was not found",
            date: "",
            link: "",
            tag: "error - message"
        }
    }
    return entryById
}