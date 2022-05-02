import {out} from '@snickbit/out'
import {useTasks} from '../utilities/state'

export const name = 'queue:list'
export default () => out.extra(useTasks()).info('Available tasks:', Object.keys(useTasks()).join(', '))
