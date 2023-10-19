import { useState, useEffect } from 'react'

export default function Products() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('api/products')
      .then((res) => res.json())
      .then((data) => setData(data.products))
  }, [])

  return (
    <main>
      <ul>
        {data.map(({ id, thumbnail, title, price }) => (
          <li key={id}>
            <img src={thumbnail} alt={title} />
            <p>
              <strong>{title}</strong> - ${price}
            </p>
          </li>
        ))}
      </ul>
    </main>
  )
}
