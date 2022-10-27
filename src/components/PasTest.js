import React from 'react'

export default function PasTest() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(10)
  useEffect(() => {
    setPosts(props.exercises)
  }, [])

  const pageNumbers = []
  for (let i = 1; i <= Math.ceil(totalPosts /postsPerPage); i++) {
    pageNumbers.push(i)
  }
  return (
    <div>PasTest</div>
  )
}
