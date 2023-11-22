import styles from './Workers.module.scss'
import { WORKERS } from '../../DATA/workers'
import OneWokPeople from '../../components/mainDataComponents/OneWorkPeople'
import { useState } from 'react'
import WorkerForm from '../../components/mainDataComponents/WorkerForm'

const Workers =()=>{
  const [selectedFilterValue, setSelectedFilterValue] = useState('');
  const [addWorkersActive, setAddWorkersActive] = useState(false);
  const [arrDataWorkers, setArrDataWorkers] = useState(WORKERS);

  const handleSelectChange = (event)=>{
    setSelectedFilterValue(event.target.value)
  }
  const dataformHandler = (value) =>{
    setArrDataWorkers(e=> {
      return [
        ...e,
        {
          name: value.name,
          post: value.post,
          group: value.group,
          id: value.id,
      }
      ]
    }) 
  }

  // Фільтер group
  const arr = []
  arrDataWorkers.map(value=>{
    return arr.push(value.group)
  })
 const listFilterGroup = [...new Set(arr)].map(value=><option key={Math.floor(Math.random() * 10001)} value={value}>{value}</option>);


 // Відображення списку по фільтру
 const dataWorkers = arrDataWorkers.filter(event=> {
if(selectedFilterValue.length>0){
 return event.group === selectedFilterValue
} else{
  return event
}
 }).map(people=><OneWokPeople key={people.id} name={people.name} post={people.post} group={people.group} ></OneWokPeople>)
// Зняття фільтру фільтру
const offFilterHendler = ()=>{
  setSelectedFilterValue('')
}

const addWorkerHandler =()=>{
setAddWorkersActive(e=>!e)
}




return <section>
  <div className={styles.filter}>
  <button onClick={addWorkerHandler} className={styles.addworker}>Добавити працівника</button>
  <div className={styles.filterblock}>
  <select  value={selectedFilterValue} onChange={handleSelectChange}>
  {listFilterGroup}
</select>
  <button className={styles.buttonfilter} onClick={offFilterHendler}>Х</button>
  </div>
  </div>
  {addWorkersActive&&<WorkerForm closeForm={addWorkerHandler} onOpen={dataformHandler}></WorkerForm>}
  <div className={styles.section}>
  <div className={styles.title}>
    <div>Ім'я</div>
    <div>Посада</div>
    <div>Відділ</div>
  </div>
  <section className={styles.blocks}>
  {dataWorkers}
  </section>
  
</div>
  </section>
}
export default Workers