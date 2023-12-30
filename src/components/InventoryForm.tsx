import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from 'react-redux'
import { chooseName, chooseFamily, chooseGenus, chooseSpecies,chooseCommon, chooseOrigin } from '../redux/slices/RootSlice'

interface PlantFormProps {
  id?: string[]
}

const PlantForm = ( props:PlantFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      setTimeout(()=>{window.location.reload()}, 1000)
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseFamily(data.family));
      dispatch(chooseGenus(data.genus));
      dispatch(chooseSpecies(data.species));
      dispatch(chooseCommon(data.common_name));
      dispatch(chooseOrigin(data.origin));

      server_calls.create(store.getState())
      setTimeout(()=>{window.location.reload()}, 1000)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name"> Name</label>
          <Input {...register('name')} name='namee' placeholder="Owner's Name" />
        </div>
        <div>
          <label htmlFor="family">Family</label>
          <Input {...register('family')} name='family' placeholder="Plant's Family" />
        </div>
        <div>
          <label htmlFor="genus">Genus</label>
          <Input {...register('genus')} name='genus' placeholder="Plant's Genus" />
        </div>
        <div>
          <label htmlFor="species"></label>
          <Input {...register('species')} name='species' placeholder="Plant's Species" />
        </div>
        <div>
          <label htmlFor="common_name">Common</label>
          <Input {...register('common_name')} name='common_name' placeholder="Plant's Common Name" />
        </div>
        <div>
          <label htmlFor="origin">Origin</label>
          <Input {...register('origin')} name='origin' placeholder="Plant's Origin" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default PlantForm