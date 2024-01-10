// const res = await fetch('https://raw.githubusercontent.com/andrejewski/periodic-table/master/data.json')
import './pt.css'
import styles from './page.module.css'
import pt from './periodictable.json'

function page() {
  return (
    <>
      <h1 className={styles.tableTitle}>Periodic Table</h1>
      <div id={styles["periodicTable"]}>
        {pt.map(object => <Cell
          number = {object.atomicNumber}
          key = {object.atomicNumber} 
          name = {object.name} 
          symbol = {object.symbol}
          standardState = {object.standardState ? object.standardState : '?'}
          groupBlock = {object.groupBlock}
          yearDiscovered = { object.yearDiscovered}
          atomicMass = {object.atomicMass}
        ></Cell>)}
      </div>
    </>
  )
}

function Cell(x){
  const gb=x.groupBlock
  // const finalstyle = `styles.${gb}`
  return(
    <div className = {styles.cell + " " + styles[x.groupBlock.replace(/ /g,'')] + " "+ styles.normalCell}>
        <div className = {styles.name}>{x.name}</div>
        <div className = {styles.atomicNumber}>{x.number}</div>
        <div className = {styles.symbol}>{x.symbol}</div>
        <div className = {styles.standardState}>{x.standardState}</div>
        <div className = {styles.yearDiscovered}>{x.yearDiscovered}</div>
        <div className = {styles.atomicMass}>{x.atomicMass}</div>
      </div>
  )
}

// async function getData() {
//   const res = await fetch('https://raw.githubusercontent.com/andrejewski/periodic-table/master/data.json'
//   ,{
//     headers : { 
//       'Content-Type': 'application/json',
//       'Accept': 'application/json'
//      }
//   })

//   const data = await res.json()
 
//   return data
// }

export default page