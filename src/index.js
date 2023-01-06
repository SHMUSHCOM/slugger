export default function slugger(title) {
    return title.toLowerCase().trim().replace(/\s+/g,'-')
}
