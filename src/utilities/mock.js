export default function mockClasses()
{
    const prefixes = ["EECS", "MATH", "STATS"];
    const courseNums = ["101", "280", "250", "295"]

    let classes = [];
    let numClasses = Math.floor(Math.random() * Math.floor(10));
    for (let i = 0; i < numClasses; ++i)
    {
        classes.push(
            {
                title: prefixes[Math.floor(Math.random() * prefixes.length)] + " " + courseNums[Math.floor(Math.random() * courseNums.length)],
                id: Math.floor(Math.random() * Math.floor(99999)),
            }
        );
    }
    return classes;
}