export default function mockCourses()
{
    const prefixes = ["EECS", "MATH", "STATS"];
    const courseNums = ["101", "280", "250", "295"];
    const courseNameItems = ["Data Structures", "Statistical Analysis", "Real Analysis", "Algorithms", "Computer Science", "Calculus", "Discrete Mathematics"];

    let courses = [];
    let numCourses = Math.floor(Math.random() * Math.floor(10));
    for (let i = 0; i < numCourses; ++i)
    {
        courses.push(
            {
                department: prefixes[Math.floor(Math.random() * prefixes.length)],
                number: courseNums[Math.floor(Math.random() * courseNums.length)],
                title: courseNameItems[Math.floor(Math.random() * courseNameItems.length)] + " and " + courseNameItems[Math.floor(Math.random() * courseNameItems.length)],
                id: Math.floor(Math.random() * Math.floor(99999)),
            }
        );
    }
    return courses;
}