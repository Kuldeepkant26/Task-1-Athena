import React, { useEffect, useState } from 'react'
import axios from 'axios'

import '../Css/Home.css'
import { toast } from 'react-toastify'
function Home() {
    const [candidates, setCandidates] = useState(null)
    const [filteredCandidates, setfilteredCandidates] = useState(null)
    const [condition, setCondition] = useState('')

    useEffect(() => {
        fetchCandidates()

    }, [])

    //fetching cadidates from backend
    async function fetchCandidates() {
        try {
            const res = await axios.get('https://task-1-athena.vercel.app/api/cadidates')
            // console.log(res.data.data)
            setCandidates(res.data.data)
            setfilteredCandidates(res.data.data)

        } catch (error) {
            console.log(error)
            toast.error('Error in fetching candidates')

        }
    }
    //Searching login
    function handelSearch() {


        const temp = candidates.filter((el) =>
            el.name.toLowerCase().includes(condition.toLowerCase()) ||
            el.skills.join().toLowerCase().includes(condition.toLowerCase())
        );
        console.log(temp)
        if (!temp.length) {
            toast.warn("No candidates found")
        }
        setfilteredCandidates(temp)
    }
    //All sorting functions
    function ExperienceSort() {
        const temp = [...candidates];

        // Sort the copied array
        temp.sort((a, b) => a.yearsOfExperience - b.yearsOfExperience);

        console.log(temp);

        // Update the state with the sorted array
        setfilteredCandidates(temp);
    }
    function reverseSort() {
        const temp = [...filteredCandidates];

        // Sort the copied array
        temp.reverse()



        // Update the state with the sorted array
        setfilteredCandidates(temp);
    }
    function AlphabaticalSort() {
        const temp = [...candidates];

        // Sort the copied array alphabetically by the name
        temp.sort((a, b) => a.name.localeCompare(b.name));

        console.log(temp);

        // Update the state with the sorted array
        setfilteredCandidates(temp);
    }
    return (
        <div className='home'>
            <div className="search-box">
                <input placeholder='Search by name or skills' type="text" value={condition} onChange={(e) => { setCondition(e.target.value) }} />
                <button onClick={handelSearch}>
                    <i className="ri-search-2-line"></i>
                    Search
                </button>
                {condition.length ? <i className="clear-btn ri-close-line cursor-pointer" onClick={() => { setCondition('') }}></i> : <></>}
            </div>
            <div className="sorting-box">
                <p>Sort by-</p>
                <button onClick={fetchCandidates}> All </button>
                <button onClick={ExperienceSort}>Experience</button>
                <button onClick={AlphabaticalSort}>Alphabatical</button>
                <button onClick={reverseSort}>Reverse</button>
            </div>
            {filteredCandidates ? <>
                <table border="1" style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Skills</th>
                            <th>Years of Experience</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCandidates.map((candidate) => (
                            <tr key={candidate.id}>
                                <td>{candidate.name}</td>
                                <td>{candidate.skills.join(', ')}</td>
                                <td>{candidate.yearsOfExperience}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </> : <p>Loading</p>}

            <div className="add-form">

            </div>
        </div>
    )
}

export default Home
