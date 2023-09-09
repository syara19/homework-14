export function BookForm({ id, title, author, image, year }) {
  return (
    <div>
      <h1>method</h1>
      <form>
        <label>title</label>
        <input type="text" name="title" />
        <label>author</label>
        <input type="text" name="author" />
        <label>publisher</label>
        <input type="text" name="publisher" />
        <label>year</label>
        <input type="text" name="year" />
        <label>pages</label>
        <input type="text" name="pages" />
        <button>save</button>
      </form>
    </div>
  );
}
