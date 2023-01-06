import slugger from "./index.js";

describe("Testing slugger core functionality", () => {
  it("Slugger can slug a string with spaces", () => {
    expect(slugger("this is a blog post title")).toEqual("this-is-a-blog-post-title");
  });
  it("Slugger can slug a string without spaces", () => {
    expect(slugger("thisisablogposttitle")).toEqual("thisisablogposttitle");
  });
  it("Slugger can slug a string with tabs", () => {
    expect(slugger("This    is    a    blog    post    title")).toEqual("this-is-a-blog-post-title");
  });
  it("Slugger can slug a string with leading and trailing spaces", () => {
    expect(slugger(" this is a blog post title")).toEqual("this-is-a-blog-post-title");
  });
  it("Slugger can slug a string with capitals", () => {
    expect(slugger("This is A Blog Post Title")).toEqual("this-is-a-blog-post-title");
  });
  it("Slugger can slug an empty string", () => {
    expect(slugger("")).toEqual("")
  })
});
