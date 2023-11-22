import { useState } from "react"
import styles from './WorkerForm.module.scss'

const WorkerForm = (props) =>{

  const [valueName, setValueName] = useState('');
  const [valuePosition, setValuePosition] = useState('');
  const [valueDepartment, setValueDepartment] = useState('');
  const [isVisibleAnimatio, setIsVisibleAnimatio] = useState(false);
  const valueNameHandler = (event) =>{
    setValueName(event.target.value)
   }
   const valuePositionHandler = (event) =>{
    setValuePosition(event.target.value)
   }
   const valueDepartmentHandler = (event) =>{
    setValueDepartment(event.target.value)
   }

   const submitFormHandler = (event) =>{
    event.preventDefault()

    if( valueName.length > 0 && valuePosition.length > 0 && valueDepartment.length > 0){
      props.onOpen({
        name: valueName,
        post: valuePosition,
        group:  valueDepartment,
        id: Math.random()*1000
      })
      setIsVisibleAnimatio(true)
    }

    setValueName('');
    setValuePosition('');
    setValueDepartment('');
   }
  const closeFormHandler = () =>{
    setValueName('');
    setValuePosition('');
    setValueDepartment('');
    props.closeForm()
  }
  return <form className={`${styles.form}`} onSubmit={submitFormHandler}  onAnimationEnd={() => setIsVisibleAnimatio(false)}>
  <div>
    <label>Введіть Ім'я</label>
    <input className={isVisibleAnimatio&& styles.animationend} value={valueName} onChange={valueNameHandler} name="name" type='text'></input>
  </div>
  <div>
    <label>Введіть посаду</label>
    <input className={isVisibleAnimatio&& styles.animationend} value={valuePosition} onChange={valuePositionHandler} name="position" type='text'></input>
  </div>
  <div>
    <label>Введіть відділ</label>
    <input className={isVisibleAnimatio&& styles.animationend} value={valueDepartment} onChange={valueDepartmentHandler} name="department" type='text'></input>
  </div>
  <div className={styles.buttonblock}>
  <button  onClick={closeFormHandler} className={styles.reset} type="reset">Закрити</button>
    <button className={styles.add} type="submit">Добавити</button>
    
  </div>
</form>
}
export default WorkerForm