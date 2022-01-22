import { useState } from 'react';

export default function ProjectForm() {
  const [hits, setHits] = useState([]);

  const search = async (event: any) => {
    const q = event.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q });

      const res = await fetch('/api/search?' + params);

      const result = await res.json();
      console.log(result);
      setHits(result['projects']);
    }
  };

  return (
    <div>
      <input onChange={search} type="text" />

      <ul>
        {hits.map((hit: {entityId: string, name: string, languages: string, description: string}) => (
            <li key={hit.entityId}>
              <div>{hit.name}</div>
              <div>{hit.languages}</div>
              <div>{hit.description}</div>
            </li>
          ))}
      </ul>
    </div>
  );
}