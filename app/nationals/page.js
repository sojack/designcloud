import data from './nationals.json'
import './nationals.css'

export const metadata = {
    title: 'Canadian Championships'
    }

function page() {
  return (
    <div>
        <h1>Canadian Masters Swimming Championships</h1>
        <table>
                <thead>
                    <tr>
                    <td></td>
                    <td>Year</td>
                    <td>Hosting City</td>
                    <td>Participants</td>
                    <td>Format</td>
                    </tr>
                </thead>
            <tbody>
                {
                data.map(x=>
                    <tr key={x.year}
                        className={x.on==0?'canceled':''}
                    >
                        <td
                        className={'Betty'}
                        
                        >•</td>
                        <td>{x.year}</td>
                        <td>{x.city}</td>
                        <td>{x.entries}</td>
                        <td>{x.format}</td>
                    </tr>
                    )
                }

            </tbody>
        </table>
    </div>
  )
}

export default page
