import { md2html } from "../src/md2html";

describe("md2html()", () => {
  it("should return html", () => {
    expect(
      md2html(`# test1
test test
`)
    ).toEqual(`<h1>test1</h1>
<p>test test</p>`);
  });
  it("should sanitize html", () => {
    expect(
      md2html(`# test1

<script>alsert("danger")</script>

test test
`)
    ).toEqual(`<h1>test1</h1>
<p>test test</p>`);
  });
});
