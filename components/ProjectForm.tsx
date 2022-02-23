export default function ProjectForm() {
  const handleSubmit = async (event: any) => {
    event.preventDefault();

    const form = new FormData(event.target);
    const formData = Object.fromEntries(form.entries());

    const res = await fetch("/api/projects", {
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    console.log(result);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name='name' type='text' />
      <input name='languages' type='text' />
      <textarea name='description' />

      <button type='submit'>Create Project</button>
    </form>
  );
}
