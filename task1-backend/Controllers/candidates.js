
//data
const candidates = [
    { id: 1, name: 'Aarav', skills: ['JavaScript', 'React'], yearsOfExperience: 5 },
    { id: 2, name: 'Vivaan', skills: ['Node.js', 'Express'], yearsOfExperience: 3 },
    { id: 3, name: 'Siya', skills: ['Python', 'Django'], yearsOfExperience: 4 },
    { id: 4, name: 'Advika', skills: ['Java', 'Spring'], yearsOfExperience: 6 },
    { id: 5, name: 'Ishaan', skills: ['C++', 'Qt'], yearsOfExperience: 2 },
    { id: 6, name: 'Anaya', skills: ['PHP', 'Laravel'], yearsOfExperience: 7 },
    { id: 7, name: 'Reyansh', skills: ['Ruby', 'Rails'], yearsOfExperience: 3 },
    { id: 8, name: 'Kiara', skills: ['C#', '.NET'], yearsOfExperience: 5 },
    { id: 9, name: 'Arjun', skills: ['Go', 'Kubernetes'], yearsOfExperience: 4 },
    { id: 10, name: 'Meera', skills: ['Swift', 'iOS'], yearsOfExperience: 6 },
    { id: 11, name: 'Kavya', skills: ['Android', 'Kotlin'], yearsOfExperience: 5 },
    { id: 12, name: 'Ayaan', skills: ['SQL', 'NoSQL'], yearsOfExperience: 4 },
    { id: 13, name: 'Riya', skills: ['HTML', 'CSS'], yearsOfExperience: 2 },
    { id: 14, name: 'Samarth', skills: ['Cloud', 'AWS'], yearsOfExperience: 7 },
    { id: 15, name: 'Niharika', skills: ['DevOps', 'CI/CD'], yearsOfExperience: 6 }
];

module.exports.getAllCandidates = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            message: "Candidates data",
            data: candidates
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: "Failed to fetch",

        })
    }
}