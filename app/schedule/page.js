import schedule from './schedule.json';
import './schedule.css'

export const metadata = {
    title: '2024 RHAC Schedule'
    }

function page() {

  return (
    <div>
      <Calendar />
    </div>
  )
}

const Calendar = () => {
  const daysOfWeek = Object.keys(schedule);

  // Function to group practices by time for a specific day
  const groupPracticesByTime = (day) => {
    const groupedPractices = {};
    schedule[day].forEach(practice => {
      if (!groupedPractices[practice.time]) {
        groupedPractices[practice.time] = [];
      }
      groupedPractices[practice.time].push(practice);
    });
    return groupedPractices;
  };

  return (
    <div>
      <h2>Weekly Schedule</h2>
      <table>
        <thead>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Object.keys(schedule[daysOfWeek[0]]).map(index => {
            const practiceTime = schedule[daysOfWeek[0]][index].time;
            const practicesByTime = groupPracticesByTime(daysOfWeek[0]);
            return (
              <tr key={index}>
                {daysOfWeek.map(day => {
                  const practices = practicesByTime[practiceTime];
                  const practice = practices && practices.find(p => p.group === schedule[day][index].group);
                  return (
                    <td key={`${day}-${index}`}>
                      {practice && (
                        <div>
                          <div>{practice.time}</div>
                          <div>{practice.group}</div>
                          <div>{practice.location}</div>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


export default page