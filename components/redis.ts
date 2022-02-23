import { Client, Entity, Schema, Repository } from "redis-om";

const client = new Client();

async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Project extends Entity {}
let schema = new Schema(
  Project,
  {
    name: { type: "string" },
    description: { type: "string" },
    languages: { type: "string" },
  },
  {
    dataStructure: "JSON",
  }
);

export async function createProject(data: any) {
  await connect();

  const repository = new Repository(schema, client);
  const project = repository.createEntity(data);
  const id = await repository.save(project);

  return id;
}

export async function getProject(id: any) {
  await connect();

  const repository = new Repository(schema, client);
  return repository.fetch(id);
}

export async function createIndex() {
  await connect();

  const repository = new Repository(schema, client);
  await repository.createIndex();
}

export async function searchProjects(q: any) {
  await connect();

  const repository = new Repository(schema, client);

  const projects = await repository
    .search()
    .where("name")
    .equals(q)
    .or("languages")
    .equals(q)
    // .or('description').match(q)
    .return.all();

  return projects;
}

export async function getAllProjects() {
  await connect();

  const repository = new Repository(schema, client);

  const projects = await repository.search().return.all();

  return projects;
}
