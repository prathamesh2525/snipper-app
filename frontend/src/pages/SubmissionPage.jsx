import { useState, useEffect } from "react"
import axios from "axios"

const SubmissionsPage = () => {
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/submissions")
      .then((res) => setSubmissions(res.data))
      .catch((err) => console.error(err))
  }, [])

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Submitted Code Snippets</h1>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border border-gray-600 w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-600 px-4 py-2">Username</th>
              <th className="border border-gray-600 px-4 py-2">
                Code Language
              </th>
              <th className="border border-gray-600 px-4 py-2">Code Snippet</th>
              <th className="border border-gray-600 px-4 py-2">
                Standard Input
              </th>
              <th className="border border-gray-600 px-4 py-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission._id}>
                <td className="border border-gray-600 px-4 py-2">
                  {submission.username}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {submission.codeLanguage}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {submission.codeSnippet.substring(0, 100)}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {submission.stdin}
                </td>
                <td className="border border-gray-600 px-4 py-2">
                  {submission.timestamp}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SubmissionsPage
